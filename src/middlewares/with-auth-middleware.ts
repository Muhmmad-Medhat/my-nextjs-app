// https://github.com/nextauthjs/next-auth/discussions/8961
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import type { MiddlewareFactory } from './types';

// Commented out NextAuth for now - update when auth is configured
import NextAuth from 'next-auth';
import { defaultLocale } from '@/i18n/config';

import { getLocale } from './lib/get-locale';
import { authConfig } from '../auth/auth.config';
const { auth } = NextAuth(authConfig);

function containsDashboard(value: string) {
  const regex = /^(\/[a-zA-Z]{2})?\/dashboard(\/.*)?$/;
  return regex.test(value);
}

function isRootPage(value: string) {
  // Matches / or /en or /ar (root pages with or without locale)
  const regex = /^(\/[a-zA-Z]{2})?\/?\s*$/;
  return regex.test(value);
}

function isProtectedRoute(value: string) {
  // Protected routes: dashboard and root page
  return containsDashboard(value) || isRootPage(value);
}

export const withAuth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { nextUrl } = request;
    const locale = getLocale(request);
    const session = await auth();

    const isOnProtectedRoute = isProtectedRoute(nextUrl.pathname);
    const isOnSignIn = nextUrl.pathname.includes('/sign-in');

    // Redirect unauthenticated users trying to access protected routes
    if (!session && isOnProtectedRoute) {
      // Build sign-in URL with locale
      const signInUrl =
        locale !== defaultLocale ? `/${locale}/sign-in` : `/sign-in`;

      // Add the original pathname as a query param (will be used to redirect back)
      // Store just the path without locale for cleaner URLs
      const pathWithoutLocale =
        nextUrl.pathname.replace(/^\/[a-z]{2}/, '') || '/';
      const redirectUrl = new URL(signInUrl, request.url);

      // Only add redirect param if it's not the root or dashboard
      if (pathWithoutLocale !== '/' && pathWithoutLocale !== '/dashboard') {
        redirectUrl.searchParams.set('from', pathWithoutLocale);
      }

      return NextResponse.redirect(redirectUrl);
    }

    // Redirect authenticated users away from sign-in to dashboard
    if (session && isOnSignIn) {
      const url =
        locale !== defaultLocale ? `/${locale}/dashboard` : `/dashboard`;
      return NextResponse.redirect(new URL(url, request.url));
    }

    return next(request, event);
  };
};
