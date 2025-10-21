import enMessages from './en.json';
import arMessages from './ar.json';

// Export individual languages
export const en = enMessages;
export const ar = arMessages;

// Export default as English for backwards compatibility
export default enMessages;

// Export type based on English messages structure
export type Messages = typeof enMessages;

// Export all messages
export const messages = {
  en: enMessages,
  ar: arMessages,
} as const;

// Export locale type
export type Locale = keyof typeof messages;

export const messagesByLocale: Record<string, unknown> = {
  en: enMessages,
  ar: arMessages,
};
