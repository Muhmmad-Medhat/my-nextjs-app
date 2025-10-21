// https://github.com/nextauthjs/next-auth/discussions/8961
import { NextFetchEvent, NextRequest } from 'next/server';
import type { MiddlewareFactory } from './types';

// Commented out NextAuth for now - update when auth is configured
// import NextAuth from 'next-auth';
// import { NextResponse } from 'next/server';
// import { defaultLocale } from '@/i18n/config';
// import { getLocale } from './lib/get-locale';
// import { authConfig } from '../auth/auth.config';
// const { auth } = NextAuth(authConfig);

// function containsDashboard(value: string) {
//   const regex = /^(\/[a-zA-Z]{2})?\/dashboard(\/.*)?$/;
//   return regex.test(value);
// }

export const withAuth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // Auth is disabled for now - just pass through to next middleware
    // Uncomment below when auth is configured

    // const { nextUrl } = request;
    // const locale = getLocale(request);
    // const session = await auth();
    //
    // if (session == null && containsDashboard(nextUrl.pathname)) {
    //   const url =
    //     locale !== defaultLocale
    //       ? `/${locale}/sign-in?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`
    //       : `/sign-in?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`;
    //   return NextResponse.redirect(new URL(url, request.url));
    // }
    //
    // if (session != null && containsDashboard(nextUrl.pathname) === false) {
    //   const url = locale !== defaultLocale ? `/${locale}/dashboard` : `/dashboard`;
    //   return NextResponse.redirect(new URL(url, request.url));
    // }

    return next(request, event);
  };
};
