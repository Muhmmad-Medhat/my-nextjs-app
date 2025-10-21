import { routing } from '@/i18n/routing';
// Import the English messages to use as the base type
import type { Messages } from '@/i18n/dictionary';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}

declare module '*.css' {
  const content: string;
  export default content;
}
