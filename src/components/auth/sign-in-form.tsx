'use client';

import { useActionState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { authenticate } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export function SignInForm() {
  const t = useTranslations('components.auth.sign_in');
  const locale = useLocale();
  const searchParams = useSearchParams();

  // Use 'from' parameter for cleaner URLs
  // Default to /dashboard if no redirect specified
  const fromPath = searchParams.get('from') || '/dashboard';
  const callbackUrl = `/${locale}${fromPath}`;

  const [state, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  useEffect(() => {
    if (state?.success) {
      // The redirect is handled by the server action
      // This is just for additional feedback if needed
    }
  }, [state?.success]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <input type="hidden" name="locale" value={locale} />

            {state?.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">{t('email_label')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('email_placeholder')}
                required
                autoComplete="email"
                disabled={isPending}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t('password_label')}</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  {t('forgot_password')}
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder={t('password_placeholder')}
                required
                autoComplete="current-password"
                disabled={isPending}
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('signing_in')}
                </>
              ) : (
                t('submit_button')
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
