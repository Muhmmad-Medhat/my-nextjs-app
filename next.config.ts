import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { resolve } from 'path';
import { defaultLocale } from '@/i18n/config';

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    // Generate TypeScript declarations for messages to enable type-safe arguments
    createMessagesDeclaration: resolve(`./src/i18n/dictionary/${defaultLocale}.json`),
  },
});

export default withNextIntl(nextConfig);
