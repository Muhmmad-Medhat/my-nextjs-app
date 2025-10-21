import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';
import { getLocale } from './lib/get-locale';
import type { MiddlewareFactory } from './types';

const i18nConfig = { locales, defaultLocale };

export const withI18n: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    // Check if there's already a locale in the path
    const localeInPath = i18nConfig.locales.find((loc) => {
      return pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`;
    });

    // Locale is NOT in the path - redirect to add it
    if (localeInPath == null) {
      // Only detect locale when there's no locale in the path
      const locale = getLocale(request);
      let path = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
      if (request.nextUrl?.search != null) {
        path += request.nextUrl.search;
      }
      // Redirect to show locale in URL
      return NextResponse.redirect(new URL(path, request.url));
    } else {
      // Locale IS in the path - set it in the request headers for next-intl
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-next-intl-locale', localeInPath);

      // Create a new request with the updated headers
      const modifiedRequest = new NextRequest(request.url, {
        headers: requestHeaders,
        method: request.method,
      });

      const response = await next(modifiedRequest, event);

      // Also set it in response headers for debugging
      response.headers.set('x-next-intl-locale', localeInPath);

      return response;
    }
  };
};
