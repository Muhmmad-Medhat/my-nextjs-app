'use client';
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

/**
 * The `export function Maintenance()` block in the provided code is defining a React functional
 * component named `Maintenance`. This component returns JSX elements that represent a maintenance page
 * UI. Here's a breakdown of what the component is doing:
 *  @return {JSX.Element} The JSX Code for the Maintenance Page
 * */
export function Maintenance(): JSX.Element {
  const t = useTranslations('components.maintenance');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-8"
      >
        {/* Placeholder for an animated SVG. You can replace this with a more complex Lottie animation or a custom SVG. */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 text-6xl md:text-8xl font-bold"
          >
            <span className="sr-only">{t('sr_only_icon')}</span>
            🛠️
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 tracking-tight"
      >
        {t('title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md mb-8"
      >
        {t('description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      >
        <Button asChild size="lg" className="px-8 py-3 text-lg">
          <Link href="/">{t('button')}</Link>
        </Button>
      </motion.div>
    </div>
  );
}
