import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { headers } from 'next/headers';

export default getRequestConfig(async ({ requestLocale }) => {
  // First try to get locale from request
  let requested = await requestLocale;

  // If not found, try to get from headers set by our middleware
  if (!requested) {
    const headersList = await headers();
    requested = headersList.get('x-next-intl-locale') ?? undefined;
  }

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./dictionary/${locale}.json`)).default,
  };
});
