'use server';

import { signIn, signOut } from '@/auth/auth';
import { signInSchema } from '@/lib/validators/auth';
import { AuthError } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export async function authenticate(
  prevState: { error?: string; success?: boolean } | undefined,
  formData: FormData
) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const locale = formData.get('locale') as string | undefined;

    // Validate with Zod
    const validatedFields = signInSchema.safeParse({
      email,
      password,
    });

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      const firstError =
        errors.email?.[0] || errors.password?.[0] || 'Validation failed';
      return {
        error: firstError,
        success: false,
      };
    }

    const callbackUrl = formData.get('callbackUrl') as string | undefined;
    const defaultRedirect = locale ? `/${locale}/dashboard` : '/dashboard';

    await signIn('credentials', {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirectTo: callbackUrl || defaultRedirect,
    });

    return { success: true };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials', success: false };
        default:
          return { error: 'Something went wrong', success: false };
      }
    }

    return { error: 'An unexpected error occurred', success: false };
  }
}

export async function handleSignOut(locale?: string) {
  try {
    const redirectUrl = locale ? `/${locale}/sign-in` : '/sign-in';
    await signOut({ redirectTo: redirectUrl });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw error;
  }
}
