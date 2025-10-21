import { routing } from '@/i18n/routing';
import { formats } from '@/i18n/request';

// Import the English messages to use as the base type
import { type Messages } from '@/i18n/dictionary/index.types';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
    Formats: typeof formats;
  }
}

declare module '*.css' {
  const content: string;
  export default content;
}
