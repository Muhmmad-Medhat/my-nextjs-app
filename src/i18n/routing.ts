import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Always show locale in URL (including default locale)
  localePrefix: 'always',

  // Disable automatic locale detection - we handle it in custom middleware
  localeDetection: false,
});
