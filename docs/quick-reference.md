# Quick Reference Guide

## Development Commands

### Next.js Development

```bash
npm run dev          # Start Next.js dev server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
```

### Storybook Development

```bash
npm run storybook        # Start Storybook dev server on port 6006
npm run build-storybook  # Build static Storybook for deployment
```

### Code Quality

```bash
npm run lint           # Run ESLint
npm run check-types    # TypeScript type checking
npm run check-format   # Check Prettier formatting
npm run format         # Format code with Prettier
npm run test-all       # Run all checks + build
```

## Internationalization (i18n)

### Basic Usage

#### In Pages

```typescript
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('pages.home');
  return <h1>{t('hello')}</h1>; // "Hello World" or "مرحبا بالعالم"
}
```

#### In Components

```typescript
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('components.navigation');
  return (
    <nav>
      <span>{t('brand_name')}</span> {/* "Acme" or "أكمي" */}
      <button>{t('login_button')}</button> {/* "Log in" or "تسجيل الدخول" */}
    </nav>
  );
}
```

### Translation Namespaces

| Namespace               | Maps to                                    | Usage                                      | Common Keys                                     |
| ----------------------- | ------------------------------------------ | ------------------------------------------ | ----------------------------------------------- |
| `pages.home`            | `pages.home` in `{locale}.json`            | `useTranslations('pages.home')`            | `title`, `hello`, `description`, `getStarted`   |
| `pages.company.about`   | `pages.company.about` in `{locale}.json`   | `useTranslations('pages.company.about')`   | `title`, `description`, `ourStory`, `ourTeam`   |
| `pages.careers`         | `pages.careers` in `{locale}.json`         | `useTranslations('pages.careers')`         | `title`, `jobOpenings`, `internships`           |
| `pages.products`        | `pages.products` in `{locale}.json`        | `useTranslations('pages.products')`        | `title`, `css`, `evenue`, `zisoft`              |
| `pages.services`        | `pages.services` in `{locale}.json`        | `useTranslations('pages.services')`        | `title`, `security`, `training`, `professional` |
| `pages.partners`        | `pages.partners` in `{locale}.json`        | `useTranslations('pages.partners')`        | `title`, `become`, `locator`, `portal`          |
| `pages.support`         | `pages.support` in `{locale}.json`         | `useTranslations('pages.support')`         | `title`, `contact`, `demo`, `technical`         |
| `components.navigation` | `components.navigation` in `{locale}.json` | `useTranslations('components.navigation')` | `home`, `company`, `careers`, `products`        |
| `components.footer`     | `components.footer` in `{locale}.json`     | `useTranslations('components.footer')`     | `learn`, `examples`, `copyright`                |
| `components.header`     | `components.header` in `{locale}.json`     | `useTranslations('components.header')`     | `welcome`, `logo`                               |
| `components.buttons`    | `components.buttons` in `{locale}.json`    | `useTranslations('components.buttons')`    | `submit`, `cancel`, `save`, `edit`, `delete`    |

## Application Routes

### Core Routes

| Route          | English URL          | Arabic URL           | Translation Namespace |
| -------------- | -------------------- | -------------------- | --------------------- |
| Home           | `/` or `/en`         | `/ar`                | `pages.home`          |
| Company About  | `/en/company/about`  | `/ar/company/about`  | `pages.company.about` |
| Privacy Policy | `/en/privacy-policy` | `/ar/privacy-policy` | `pages.privacyPolicy` |

### Business Sections

| Section  | English Base   | Arabic Base    | Translation Namespace |
| -------- | -------------- | -------------- | --------------------- |
| Careers  | `/en/careers`  | `/ar/careers`  | `pages.careers`       |
| Products | `/en/products` | `/ar/products` | `pages.products`      |
| Services | `/en/services` | `/ar/services` | `pages.services`      |
| Partners | `/en/partners` | `/ar/partners` | `pages.partners`      |
| Support  | `/en/support`  | `/ar/support`  | `pages.support`       |

### Dynamic Routes

| Pattern     | Example                              | Translation Approach              |
| ----------- | ------------------------------------ | --------------------------------- |
| `[id]`      | `/company/announcements/123`         | `t('announcements.123.title')`    |
| `[slug]`    | `/careers/jobs/developer`            | `t('jobs.developer.title')`       |
| `[program]` | `/careers/jobs/internships/security` | `t('internships.security.title')` |

## Component Structure

### Active Components

| Component   | Location                   | Translation Namespace           | Status    |
| ----------- | -------------------------- | ------------------------------- | --------- |
| Header      | `layout/header.tsx`        | `components.layout.header`      | ✅ Active |
| Maintenance | `shared/maintenance.tsx`   | `components.shared.maintenance` | ✅ Active |
| UI Library  | `ui/*.tsx` (47 components) | `components.ui.*`               | ✅ Active |

### Component Categories

```typescript
// Layout components
const headerT = useTranslations('components.layout.header');

// Shared components
const maintenanceT = useTranslations('components.shared.maintenance');

// UI components
const buttonT = useTranslations('components.ui.button');
const formT = useTranslations('components.ui.form');

// Future components (placeholder structure ready)
const jobCardT = useTranslations('components.careers.jobCard');
const productCardT = useTranslations('components.products.productCard');
```

### UI Component Library

The `ui/` directory contains 47 components:

- **Form Components**: `button.tsx`, `input.tsx`, `form.tsx`, `checkbox.tsx`, `select.tsx`
- **Navigation**: `navigation-menu.tsx`, `breadcrumb.tsx`, `pagination.tsx`
- **Layout**: `card.tsx`, `accordion.tsx`, `separator.tsx`, `sheet.tsx`
- **Feedback**: `alert.tsx`, `alert-dialog.tsx`, `tooltip.tsx`, `sonner.tsx`
- **Data Display**: `table.tsx`, `badge.tsx`, `avatar.tsx`, `progress.tsx`
- **Controls**: `slider.tsx`, `switch.tsx`, `toggle.tsx`, `radio-group.tsx`

### Placeholder Structure

Component directories mirror the routing structure for future development:

```text
components/
├── careers/jobs/          # Future job-related components
├── company/about/         # Future company components
├── products/css/          # Future product components
├── services/security/     # Future service components
├── partners/locator/      # Future partner components
└── support/contact/       # Future support components
```

### Route Examples with Translations

```typescript
// Company About page
const t = useTranslations('pages.company.about');
const title = t('title'); // "About Zinad" / "عن زناد"

// Career Jobs page
const t = useTranslations('pages.careers.jobs');
const openings = t('openPositions'); // "Open Positions" / "الوظائف المتاحة"

// Product specific page
const t = useTranslations('pages.products.css');
const description = t('description'); // CSS Security description

// Dynamic job page
const t = useTranslations('pages.careers.jobs');
const jobTitle = t(`${slug}.title`); // Dynamic based on job slug

// Partner locator by region
const t = useTranslations('pages.partners.locator.africa');
const regionTitle = t('title'); // "Africa Partners" / "شركاء أفريقيا"
```

## URLs

- English: `http://localhost:3000` or `http://localhost:3000/en`
- Arabic: `http://localhost:3000/ar`

## Adding New Translations

1. **Add to consolidated files**: Update both `src/i18n/dictionary/en.json` & `ar.json`
2. **Use nested structure**: Max 3 levels (e.g., `pages.contact.form.email`)
3. **Use in component**: `const t = useTranslations('pages.contact')`

## Common Translation Keys

### Navigation Components

```json
{
  "home": "Home", // "الرئيسية"
  "company": "Company", // "الشركة"
  "careers": "Careers", // "الوظائف"
  "products": "Products", // "المنتجات"
  "services": "Services", // "الخدمات"
  "partners": "Partners", // "الشركاء"
  "support": "Support", // "الدعم"
  "about": "About", // "عن الشركة"
  "announcements": "Announcements", // "الإعلانات"
  "contact": "Contact", // "اتصل بنا"
  "demo": "Request Demo", // "طلب عرض توضيحي"
  "portal": "Portal" // "البوابة"
}
```

### Page Content

```json
{
  "title": "Page Title", // "عنوان الصفحة"
  "hello": "Hello World", // "مرحبا بالعالم"
  "description": "Page description", // "وصف الصفحة"
  "getStarted": "Get started by editing" // "ابدأ بتحرير"
}
```

### Form & Buttons

```json
{
  "submit": "Submit", // "إرسال"
  "cancel": "Cancel", // "إلغاء"
  "save": "Save", // "حفظ"
  "edit": "Edit", // "تحرير"
  "delete": "Delete" // "حذف"
}
```

## Storybook Integration

### Working with Translations in Storybook

Components using `useTranslations` work automatically in Storybook thanks to the `storybook-next-intl` addon:

```typescript
// Component stories automatically support translations
export const Default: Story = {
  args: {},
};

// Test specific locales
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

Use the locale switcher in the Storybook toolbar to test all components across different languages.

📚 **[Full Storybook i18n Guide](./storybook-i18n.md)**

## Troubleshooting

| Error                 | Solution                                            |
| --------------------- | --------------------------------------------------- |
| `MISSING_MESSAGE`     | Check key exists in both `en.json` and `ar.json`    |
| Hydration error       | Ensure `NextIntlClientProvider` has `messages` prop |
| Translation not found | Verify nested path matches dictionary structure     |

📚 **[Full Documentation](./internationalization.md)** | **[Storybook i18n Guide](./storybook-i18n.md)** | **[Storybook Testing Guide](./storybook-testing.md)**

## Storybook

### Creating Stories

```typescript
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'components/ui/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    /* component props */
  },
};
```

### Story Organization

- **File naming**: `ComponentName.stories.tsx`
- **Story titles**: `components/category/ComponentName`
- **Location**: Same directory as component

### Testing Integration

- Stories are automatically tested with Vitest
- Browser testing with Playwright
- Accessibility testing included

### Storybook URLs

- Storybook dev server: `http://localhost:6006`
