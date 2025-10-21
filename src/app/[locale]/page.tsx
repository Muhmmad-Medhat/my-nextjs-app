import { JSX } from 'react';
import { auth } from '@/auth/auth';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/**
 * Home component for the landing page
 * @returns JSX.Element
 * @description This component renders the home/landing page with authentication options.
 */
export default async function Home(): Promise<JSX.Element> {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to <span className="text-primary">Next.js App</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern web application with authentication, internationalization,
            and protected routes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {session ? (
            <>
              <Button asChild size="lg">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Signed in as{' '}
                <span className="font-medium">{session.user.email}</span>
              </p>
            </>
          ) : (
            <>
              <Button asChild size="lg">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>🔐 Authentication</CardTitle>
              <CardDescription>Secure credential-based auth</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                NextAuth v5 with Zod validation and server actions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🌍 i18n Support</CardTitle>
              <CardDescription>Multi-language ready</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                English and Arabic support with next-intl
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🛡️ Protected Routes</CardTitle>
              <CardDescription>Middleware-based protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dashboard routes protected with authentication middleware
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
