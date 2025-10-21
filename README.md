# Zinad Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📢 **Important Notice - i18n Structure Updated!**

**🚀 We've improved our internationalization structure for better performance and easier development.**

**👥 For Team Members:**

- **Quick Preview:** [`TEAM_UPDATE_I18N_PREVIEW.md`](TEAM_UPDATE_I18N_PREVIEW.md) - 2 min read ⚡
- **Full Migration Guide:** [`TEAM_UPDATE_I18N.md`](TEAM_UPDATE_I18N.md) - Complete instructions 📋
- **Action Required:** Update your translation calls (simple change!)

---

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** support
- ✅ **Internationalization (i18n)** with next-intl
- ✅ **Multi-language support** (English & Arabic)
- ✅ **Consolidated translation structure** (2 files vs 12+)
- ✅ **Hydration-safe configuration**
- ✅ **Storybook** for component development and documentation
- ✅ **Vitest** integration with browser testing
- ✅ **Accessibility testing** with automated a11y checks
- ✅ **Component stories** with comprehensive examples

## Supported Languages

- **English (en)** - Default language
- **Arabic (ar)** - RTL language support

## Getting Started

### 1. **Pull Latest Changes** (Important!)

```bash
git checkout main
git pull origin main
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Update Translation Calls** (If Working with i18n)

```typescript
// OLD ❌
const t = useTranslations('home');
const t = useTranslations('navigation');

// NEW ✅
const t = useTranslations('pages.home');
const t = useTranslations('components.navigation');
```

### 4. **Start Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Language Navigation

- **English**: [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/en](http://localhost:3000/en)
- **Arabic**: [http://localhost:3000/ar](http://localhost:3000/ar)

### Component Development with Storybook

For isolated component development and testing:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to access Storybook with:

- **Interactive component documentation**
- **Accessibility testing**
- **Visual component testing**
- **Story-driven development**

You can start editing the page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Documentation

📚 **[Complete Documentation](./docs/README.md)** - Comprehensive project documentation

### Quick Links

- **[i18n Update Guide](./TEAM_UPDATE_I18N_PREVIEW.md)** ⭐ **Read First** - Latest improvements
- **[Internationalization Guide](./docs/internationalization.md)** - Complete i18n setup and usage guide
- **[Storybook & Testing Guide](./docs/storybook-testing.md)** - Component development and testing documentation
- **[Quick Reference](./docs/quick-reference.md)** - Development commands and common patterns
- **[Project Structure](./I18N_STRUCTURE.md)** - New consolidated structure overview

## Project Structure

```text
src/
├── app/[locale]/          # Localized pages (Next.js 15 App Router)
│   ├── about/             # Legacy about page (removed)
│   ├── careers/           # Careers section
│   │   └── jobs/          # Job listings and details
│   │       ├── internships/    # Internship programs
│   │       │   ├── ctf-challenge/  # CTF challenge page
│   │       │   └── [program]/      # Dynamic internship program
│   │       └── [slug]/         # Dynamic job details
│   ├── company/           # Company information
│   │   ├── about/         # Company about page
│   │   └── announcements/ # Company announcements
│   │       ├── zinad-gartner/  # Specific announcement
│   │       └── [id]/           # Dynamic announcements
│   ├── partners/          # Partner ecosystem
│   │   ├── become/        # Become a partner
│   │   ├── locator/       # Partner locator by region
│   │   │   ├── africa/    # Africa partners
│   │   │   ├── europe/    # Europe partners
│   │   │   ├── middle-east/  # Middle East partners
│   │   │   └── usa/       # USA partners
│   │   └── portal/        # Partner portal
│   ├── privacy-policy/    # Privacy policy page
│   ├── products/          # Product portfolio
│   │   ├── css/           # CSS Security product
│   │   ├── cybersecurity-awareness-campaigns/  # Awareness campaigns
│   │   ├── evenue/        # eVenue product
│   │   ├── zi-games/      # Zi-Games product
│   │   └── zisoft/        # ZiSoft product
│   ├── services/          # Service offerings
│   │   ├── application-security/  # Application security services
│   │   ├── professional/  # Professional services
│   │   ├── security/      # Security services
│   │   └── security-training/     # Security training services
│   └── support/           # Support and assistance
│       ├── contact/       # Contact information
│       ├── demo/          # Demo requests
│       ├── quote/         # Quote requests
│       └── technical/     # Technical support
├── components/            # Reusable components
│   ├── careers/           # Placeholder for career-related components
│   │   └── jobs/          # Job-specific components (future)
│   ├── company/           # Placeholder for company-related components
│   │   ├── about/         # Company about components (future)
│   │   └── announcements/ # Announcement components (future)
│   ├── layout/            # Layout components
│   │   └── header.tsx     # Main header component
│   ├── partners/          # Placeholder for partner-related components
│   │   ├── become/        # Partner registration components (future)
│   │   ├── locator/       # Partner locator components (future)
│   │   └── portal/        # Partner portal components (future)
│   ├── privacy-policy/    # Placeholder for privacy policy components
│   ├── products/          # Placeholder for product-related components
│   │   ├── css/           # CSS Security components (future)
│   │   ├── evenue/        # eVenue components (future)
│   │   ├── zi-games/      # Zi-Games components (future)
│   │   └── zisoft/        # ZiSoft components (future)
│   ├── services/          # Placeholder for service-related components
│   │   ├── application-security/ # App security components (future)
│   │   ├── professional/  # Professional services components (future)
│   │   ├── security/      # Security services components (future)
│   │   └── security-training/    # Training components (future)
│   ├── shared/            # Shared utility components
│   │   └── maintenance.tsx # Maintenance page component
│   ├── support/           # Placeholder for support-related components
│   │   ├── contact/       # Contact components (future)
│   │   ├── demo/          # Demo request components (future)
│   │   ├── quote/         # Quote request components (future)
│   │   └── technical/     # Technical support components (future)
│   └── ui/               # UI component library (47 components)
│       ├── accordion.tsx  # Accordion component
│       ├── alert-dialog.tsx # Alert dialog component
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── form.tsx       # Form components
│       ├── input.tsx      # Input component
│       ├── navigation-menu.tsx # Navigation menu component
│       └── ...           # 40+ additional UI components
├── i18n/                 # Internationalization setup
│   ├── dictionary/       # 🆕 Consolidated translation files
│   │   ├── en.json       # ✅ All English translations
│   │   └── ar.json       # ✅ All Arabic translations
│   ├── request.ts        # Translation configuration
│   └── routing.ts        # Locale routing setup
├── types/                # TypeScript type definitions
│   └── global.d.ts       # Global type declarations
├── .storybook/           # Storybook configuration
│   ├── main.ts          # Main Storybook config
│   ├── preview.ts       # Global parameters
│   └── vitest.setup.ts  # Testing setup
└── docs/                # Project documentation
    ├── README.md        # Documentation overview
    ├── internationalization.md  # 🆕 Updated i18n guide
    ├── storybook-testing.md     # Storybook guide
    └── quick-reference.md       # 🆕 Updated quick reference
```

### 🆕 New i18n Structure Benefits

- **Performance**: 2 files instead of 12+ separate files
- **Management**: Single source of truth per language
- **Development**: Better TypeScript support and autocomplete
- **Organization**: Maximum 3 levels of nesting (e.g., `pages.home.title`)

## 🗺️ Application Routes

The application follows Next.js 15 App Router file-based routing system. All routes are automatically internationalized with English (`/en`) and Arabic (`/ar`) locales.

### Core Routes

| Route          | English URL          | Arabic URL           | Description    |
| -------------- | -------------------- | -------------------- | -------------- |
| Home           | `/` or `/en`         | `/ar`                | Homepage       |
| Example        | `/en/example`        | `/ar/example`        | Example page   |
| Privacy Policy | `/en/privacy-policy` | `/ar/privacy-policy` | Privacy policy |

### Company Routes

| Route                | English URL                               | Arabic URL                                | Description           |
| -------------------- | ----------------------------------------- | ----------------------------------------- | --------------------- |
| About Company        | `/en/company/about`                       | `/ar/company/about`                       | Company information   |
| Announcements        | `/en/company/announcements`               | `/ar/company/announcements`               | Company announcements |
| Gartner News         | `/en/company/announcements/zinad-gartner` | `/ar/company/announcements/zinad-gartner` | Gartner recognition   |
| Announcement Details | `/en/company/announcements/[id]`          | `/ar/company/announcements/[id]`          | Specific announcement |

### Careers Routes

| Route              | English URL                                  | Arabic URL                                   | Description          |
| ------------------ | -------------------------------------------- | -------------------------------------------- | -------------------- |
| Careers            | `/en/careers`                                | `/ar/careers`                                | Careers overview     |
| Jobs               | `/en/careers/jobs`                           | `/ar/careers/jobs`                           | Job listings         |
| Job Details        | `/en/careers/jobs/[slug]`                    | `/ar/careers/jobs/[slug]`                    | Specific job details |
| Internships        | `/en/careers/jobs/internships`               | `/ar/careers/jobs/internships`               | Internship programs  |
| CTF Challenge      | `/en/careers/jobs/internships/ctf-challenge` | `/ar/careers/jobs/internships/ctf-challenge` | CTF challenge        |
| Internship Program | `/en/careers/jobs/internships/[program]`     | `/ar/careers/jobs/internships/[program]`     | Specific internship  |

### Products Routes

| Route               | English URL                                      | Arabic URL                                       | Description           |
| ------------------- | ------------------------------------------------ | ------------------------------------------------ | --------------------- |
| Products            | `/en/products`                                   | `/ar/products`                                   | Product overview      |
| CSS Security        | `/en/products/css`                               | `/ar/products/css`                               | CSS Security solution |
| Awareness Campaigns | `/en/products/cybersecurity-awareness-campaigns` | `/ar/products/cybersecurity-awareness-campaigns` | Security awareness    |
| eVenue              | `/en/products/evenue`                            | `/ar/products/evenue`                            | eVenue platform       |
| Zi-Games            | `/en/products/zi-games`                          | `/ar/products/zi-games`                          | Gaming solutions      |
| ZiSoft              | `/en/products/zisoft`                            | `/ar/products/zisoft`                            | Software solutions    |

### Services Routes

| Route                 | English URL                         | Arabic URL                          | Description               |
| --------------------- | ----------------------------------- | ----------------------------------- | ------------------------- |
| Services              | `/en/services`                      | `/ar/services`                      | Services overview         |
| Application Security  | `/en/services/application-security` | `/ar/services/application-security` | App security services     |
| Professional Services | `/en/services/professional`         | `/ar/services/professional`         | Professional consulting   |
| Security Services     | `/en/services/security`             | `/ar/services/security`             | General security services |
| Security Training     | `/en/services/security-training`    | `/ar/services/security-training`    | Training programs         |

### Partners Routes

| Route                | English URL                        | Arabic URL                         | Description             |
| -------------------- | ---------------------------------- | ---------------------------------- | ----------------------- |
| Partners             | `/en/partners`                     | `/ar/partners`                     | Partner ecosystem       |
| Become Partner       | `/en/partners/become`              | `/ar/partners/become`              | Partner registration    |
| Partner Locator      | `/en/partners/locator`             | `/ar/partners/locator`             | Find partners           |
| Africa Partners      | `/en/partners/locator/africa`      | `/ar/partners/locator/africa`      | African partners        |
| Europe Partners      | `/en/partners/locator/europe`      | `/ar/partners/locator/europe`      | European partners       |
| Middle East Partners | `/en/partners/locator/middle-east` | `/ar/partners/locator/middle-east` | Middle Eastern partners |
| USA Partners         | `/en/partners/locator/usa`         | `/ar/partners/locator/usa`         | US partners             |
| Partner Portal       | `/en/partners/portal`              | `/ar/partners/portal`              | Partner login portal    |

### Support Routes

| Route             | English URL             | Arabic URL              | Description          |
| ----------------- | ----------------------- | ----------------------- | -------------------- |
| Support           | `/en/support`           | `/ar/support`           | Support overview     |
| Contact           | `/en/support/contact`   | `/ar/support/contact`   | Contact information  |
| Demo Request      | `/en/support/demo`      | `/ar/support/demo`      | Request a demo       |
| Quote Request     | `/en/support/quote`     | `/ar/support/quote`     | Request a quote      |
| Technical Support | `/en/support/technical` | `/ar/support/technical` | Technical assistance |

### Dynamic Routes

The application includes several dynamic routes that accept parameters:

- **`[locale]`**: Automatic locale detection (`en`, `ar`)
- **`[id]`**: Dynamic announcement IDs
- **`[slug]`**: Dynamic job slugs
- **`[program]`**: Dynamic internship program identifiers

### Route Maintenance Status

All newly created routes currently render a maintenance page component while development is in progress. This allows for:

- **Gradual Implementation**: Routes can be implemented incrementally
- **SEO Preparation**: URLs are established early for better search indexing
- **User Experience**: Consistent messaging during development phase

## Available Scripts

### Development

```bash
npm run dev              # Start Next.js development server
npm run storybook        # Start Storybook on port 6006
```

### Building

```bash
npm run build            # Build for production
npm run build-storybook  # Build Storybook for deployment
```

### Testing & Quality

```bash
npm run lint             # Run ESLint
npm run check-types      # TypeScript type checking
npm run check-format     # Check code formatting
npm run format           # Format code with Prettier
npm run test-all         # Run all checks + build
```

## 🔧 Translation Usage Examples

### Page Components

```typescript
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('pages.home'); // ✅ New consolidated structure

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Component Usage

```typescript
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const t = useTranslations('components.navigation'); // ✅ New structure

  return (
    <nav>
      <Link href="/">{t('home')}</Link>
      <Link href="/about">{t('about')}</Link>
    </nav>
  );
}
```

## 🔄 Migration Quick Reference

| Old Usage (❌)                  | New Usage (✅)                             |
| ------------------------------- | ------------------------------------------ |
| `useTranslations('home')`       | `useTranslations('pages.home')`            |
| `useTranslations('about')`      | `useTranslations('pages.about')`           |
| `useTranslations('navigation')` | `useTranslations('components.navigation')` |
| `useTranslations('footer')`     | `useTranslations('components.footer')`     |
| `useTranslations('buttons')`    | `useTranslations('components.buttons')`    |

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [next-intl Documentation](https://next-intl.dev/) - internationalization for Next.js
- [Storybook Documentation](https://storybook.js.org/docs) - component development and testing
- [Vitest Documentation](https://vitest.dev/) - testing framework
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 🤝 Contributing

1. Pull the latest changes: `git pull origin main`
2. Read the [i18n update guide](./TEAM_UPDATE_I18N_PREVIEW.md) if working with translations
3. Follow the development guidelines in the documentation
4. Test your changes with `npm run test-all`
5. Submit your pull request

## 📞 Support

If you encounter any issues with the new i18n structure:

1. Check the [migration guide](./TEAM_UPDATE_I18N.md)
2. Review the [documentation](./docs/internationalization.md)
3. Run the verification checklist in the guides
4. Reach out to the team for assistance
