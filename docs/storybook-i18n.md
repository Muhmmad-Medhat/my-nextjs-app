# Storybook next-intl Integration

This project is configured to use `next-intl` with Storybook for internationalization support.

## Configuration

### Storybook Configuration

The integration is set up using the `storybook-next-intl` addon which is configured in `.storybook/main.ts`:

```typescript
addons: [
  // ... other addons
  'storybook-next-intl',
],
```

### Preview Configuration

In `.storybook/preview.tsx`, we configure:

1. **Global locale settings**: Sets up the available locales and default locale
2. **Decorator**: Wraps all stories with `NextIntlClientProvider` and provides the correct messages based on the selected locale

```typescript
initialGlobals: {
  locale: 'en',
  locales: {
    en: 'English',
    ar: 'العربية',
  },
},
```

### Available Locales

- **English** (`en`): Default locale
- **Arabic** (`ar`): RTL support included

## Usage in Stories

### Basic Usage

Stories automatically inherit the locale context. Components using `useTranslations` will work out of the box:

```typescript
export const Default: Story = {
  args: {},
};
```

### Locale-Specific Stories

You can create stories that showcase specific locales:

```typescript
export const Arabic: Story = {
  args: {},
  parameters: {
    nextIntl: {
      locale: 'ar',
    },
  },
};
```

### Global Locale Switching

Users can switch locales globally using the locale switcher in the Storybook toolbar, which will update all stories simultaneously.

## Components with Translations

Example component using next-intl:

```tsx
import { useTranslations } from 'next-intl';

export const Welcome = () => {
  const t = useTranslations('pages.home');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};
```

## Translation Files

Translation files are located in `src/i18n/dictionary/`:

- `en.json` - English translations
- `ar.json` - Arabic translations

The structure follows the next-intl convention with nested objects for organization:

```json
{
  "pages": {
    "home": {
      "title": "Home Page",
      "description": "Welcome to our website"
    }
  }
}
```

## Features

- ✅ Automatic locale switching in Storybook toolbar
- ✅ Per-story locale override capability
- ✅ TypeScript support with proper typing
- ✅ RTL language support (Arabic)
- ✅ Hot reload support during development
- ✅ Works with all Storybook addons

## Troubleshooting

If you encounter issues:

1. Ensure all translation keys exist in both language files
2. Check that the component is properly wrapped with the translation context
3. Verify that the locale parameter is correctly passed in story parameters
