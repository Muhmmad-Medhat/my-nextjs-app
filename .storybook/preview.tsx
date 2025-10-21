// @ts-ignore: Allow importing global CSS as a side-effect in Next.js layout
import '@/styles/globals.css';
import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';
import { messages, type Messages } from '@/i18n/dictionary';
import { defaultLocale, LOCALE_NAMES } from '@/i18n/config';

const preview: Preview = {
  initialGlobals: {
    locale: defaultLocale,
    locales: LOCALE_NAMES,
  },
  parameters: {
    nextIntl: {
      defaultLocale: defaultLocale,
      messagesByLocale: messages,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    nextjs: {
      appDirectory: true, // Enable App Router support
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || defaultLocale;
      const localeMessages = messages[
        locale as keyof typeof messages
      ] as Messages;

      return (
        <main lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <NextIntlClientProvider locale={locale} messages={localeMessages}>
            <Story />
          </NextIntlClientProvider>
        </main>
      );
    },
  ],
};

export default preview;
