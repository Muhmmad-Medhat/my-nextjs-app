// Centralized i18n configuration
// This is the single source of truth for all locale settings

const LOCALES = ['en', 'ar'] as const;
const DEFAULT_LOCALE = 'en' as const;

// Type for all supported locales
export type Locale = (typeof LOCALES)[number];

// Locale display names
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
} as const;

// Export for backwards compatibility and consistency
export const locales = LOCALES;
export const defaultLocale = DEFAULT_LOCALE;
