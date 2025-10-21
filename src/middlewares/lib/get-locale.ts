import { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { defaultLocale, locales } from '@/i18n/config';

// Cookie name for locale preference
const cookieName = 'NEXT_LOCALE';

// Helper function to extract locale from pathname
function localeFromPath(
  pathname: string,
  includeDefault = true
): string | undefined {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  return includeDefault ? undefined : undefined;
}

/**
 * Current detection strategy is 1) path, 2) cookie, 3) user agent, 4) default
 * @param request
 * @returns string locale
 */
export function getLocale(request: NextRequest): string {
  let locale: string | undefined;

  // Path detection FIRST - if user explicitly navigated to a locale, respect it
  const pathname = request.nextUrl.pathname;
  locale = localeFromPath(pathname, false);

  // Cookie detection second
  if (locale == null && request.cookies.has(cookieName)) {
    const cookieLocale = request?.cookies?.get(cookieName)?.value;
    // Double check that the cookie value is actually a valid
    // locale (it may have been 'fiddled' with)
    if (
      cookieLocale != null &&
      (locales as readonly string[]).includes(cookieLocale)
    ) {
      locale = cookieLocale;
    }
  }

  // Browser / user agent locales 3rd
  if (locale == null) {
    // NOTE: @formatjs/intl-localematcher will fail with RangeError: Incorrect locale information provided
    // of there is no locale information in the request (for example when benchmarking the application)
    try {
      // Negotiator expects plain object so we need to transform headers
      const negotiatorHeaders: Record<string, string> = {};
      request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
      const browserLanguages = new Negotiator({
        headers: negotiatorHeaders,
      }).languages();
      locale = match(
        browserLanguages,
        locales as unknown as string[],
        defaultLocale
      );
    } catch {
      // Failed to match locale, fallback to default
      locale = defaultLocale;
    }
  }

  // Lastly - fallback to default locale
  if (locale == null) {
    locale = defaultLocale;
  }

  return locale;
}
