# Internationalization (i18n) Documentation

This document provides comprehensive information about the internationalization setup in the Zinad Website project.

## Overview

The project uses **Next.js 15** with **next-intl** for internationalization support. The implementation follows a dictionary-based approach with proper TypeScript support and hydration-safe configuration.

## Supported Languages

- **English (en)** - Default language
- **Arabic (ar)** - RTL language support

## Project Structure

```
src/
├── i18n/
│   ├── dictionary/
│   │   ├── en.json     # English translations (consolidated)
│   │   └── ar.json     # Arabic translations (consolidated)
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
└── app/
    └── [locale]/
        ├── layout.tsx
        ├── page.tsx
        └── about/
            └── page.tsx
```

## Dictionary Structure

The project now uses a consolidated dictionary structure with a maximum of 3 levels of nesting:

### Dictionary Index (`src/i18n/dictionary/index.ts`)

The project includes a centralized index file for better TypeScript support and easier imports:

```typescript
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

export const messagesByLocale: Record<string, unknown> = { en, ar };
```

### English Dictionary (`en.json`)

```json
{
  "pages": {
    "home": {
      "title": "Home Page",
      "hello": "Hello World",
      "description": "Welcome to Zinad",
      "getStarted": "Get started by exploring our solutions",
      "saveChanges": "Save and see your changes instantly",
      "deployNow": "Deploy now",
      "readDocs": "Read our docs",
      "learn": "Learn",
      "examples": "Examples"
    },
    "company": {
      "about": {
        "title": "About Zinad",
        "description": "Learn more about our company",
        "ourStory": "Our Story",
        "ourMission": "Our Mission",
        "ourTeam": "Our Team",
        "founded": "Founded in",
        "employees": "Employees Worldwide"
      },
      "announcements": {
        "title": "Company Announcements",
        "latest": "Latest News",
        "readMore": "Read More",
        "publishedOn": "Published on"
      }
    },
    "careers": {
      "title": "Careers at Zinad",
      "description": "Join our innovative team",
      "openPositions": "Open Positions",
      "benefits": "Benefits & Perks",
      "jobs": {
        "title": "Job Openings",
        "apply": "Apply Now",
        "requirements": "Requirements",
        "responsibilities": "Responsibilities",
        "internships": {
          "title": "Internship Programs",
          "duration": "Duration",
          "requirements": "Requirements",
          "ctfChallenge": "CTF Security Challenge"
        }
      }
    },
    "products": {
      "title": "Our Products",
      "description": "Innovative cybersecurity solutions",
      "css": {
        "title": "CSS Security",
        "description": "Comprehensive security solutions"
      },
      "evenue": {
        "title": "eVenue Platform",
        "description": "Event management platform"
      },
      "zisoft": {
        "title": "ZiSoft Solutions",
        "description": "Software development solutions"
      },
      "cybersecurityAwarenessCampaigns": {
        "title": "Cybersecurity Awareness Campaigns",
        "description": "Educational security programs"
      },
      "ziGames": {
        "title": "Zi-Games",
        "description": "Gaming and gamification solutions"
      }
    },
    "services": {
      "title": "Our Services",
      "description": "Professional cybersecurity services",
      "applicationSecurity": {
        "title": "Application Security",
        "description": "Secure your applications"
      },
      "professional": {
        "title": "Professional Services",
        "description": "Expert consulting and implementation"
      },
      "security": {
        "title": "Security Services",
        "description": "Comprehensive security solutions"
      },
      "securityTraining": {
        "title": "Security Training",
        "description": "Education and certification programs"
      }
    },
    "partners": {
      "title": "Partner Network",
      "description": "Global partnership ecosystem",
      "become": {
        "title": "Become a Partner",
        "description": "Join our partner program",
        "benefits": "Partner Benefits",
        "apply": "Apply Now"
      },
      "locator": {
        "title": "Find Partners",
        "description": "Locate partners in your region",
        "africa": {
          "title": "Africa Partners",
          "description": "Partners across Africa"
        },
        "europe": {
          "title": "Europe Partners",
          "description": "Partners across Europe"
        },
        "middleEast": {
          "title": "Middle East Partners",
          "description": "Partners in the Middle East"
        },
        "usa": {
          "title": "USA Partners",
          "description": "Partners in the United States"
        }
      },
      "portal": {
        "title": "Partner Portal",
        "description": "Access partner resources",
        "login": "Partner Login"
      }
    },
    "support": {
      "title": "Support Center",
      "description": "Get help and assistance",
      "contact": {
        "title": "Contact Us",
        "description": "Get in touch with our team",
        "phone": "Phone",
        "email": "Email",
        "address": "Address"
      },
      "demo": {
        "title": "Request Demo",
        "description": "See our solutions in action",
        "schedule": "Schedule Demo"
      },
      "quote": {
        "title": "Get Quote",
        "description": "Request pricing information",
        "submit": "Submit Request"
      },
      "technical": {
        "title": "Technical Support",
        "description": "Technical assistance and documentation",
        "documentation": "Documentation",
        "tickets": "Support Tickets"
      }
    },
    "privacyPolicy": {
      "title": "Privacy Policy",
      "description": "Our privacy and data protection policy",
      "lastUpdated": "Last Updated"
    }
  },
  "components": {
    "navigation": {
      "home": "Home",
      "company": "Company",
      "careers": "Careers",
      "products": "Products",
      "services": "Services",
      "partners": "Partners",
      "support": "Support",
      "about": "About",
      "announcements": "Announcements",
      "contact": "Contact",
      "demo": "Demo",
      "portal": "Portal",
      "login": "Login",
      "logout": "Logout"
    },
    "footer": {
      "learn": "Learn",
      "examples": "Examples",
      "company": "Company",
      "careers": "Careers",
      "products": "Products",
      "services": "Services",
      "partners": "Partners",
      "support": "Support",
      "copyright": "© 2024 Zinad. All rights reserved",
      "privacyPolicy": "Privacy Policy"
    },
    "header": {
      "welcome": "Welcome to Zinad",
      "logo": "Zinad Logo",
      "menu": "Menu",
      "close": "Close"
    },
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel",
      "save": "Save",
      "edit": "Edit",
      "delete": "Delete",
      "apply": "Apply",
      "contact": "Contact Us",
      "learnMore": "Learn More",
      "getStarted": "Get Started",
      "requestDemo": "Request Demo",
      "getQuote": "Get Quote"
    }
  }
}
```

### Arabic Dictionary (`ar.json`)

Similar structure with Arabic translations for all keys. The Arabic version includes proper RTL (Right-to-Left) text formatting and culturally appropriate translations.

## Application Routing Structure

The application follows Next.js 15 App Router conventions with comprehensive internationalized routing. All routes are automatically available in both English and Arabic.

### Route Structure Overview

```text
src/app/[locale]/
├── page.tsx                    # Home page (/ or /en, /ar)
├── company/
│   ├── about/page.tsx         # /en/company/about, /ar/company/about
│   └── announcements/
│       ├── page.tsx           # /en/company/announcements
│       ├── [id]/page.tsx      # /en/company/announcements/[id]
│       └── zinad-gartner/page.tsx  # /en/company/announcements/zinad-gartner
├── careers/
│   ├── page.tsx               # /en/careers
│   └── jobs/
│       ├── page.tsx           # /en/careers/jobs
│       ├── [slug]/page.tsx    # /en/careers/jobs/[slug]
│       └── internships/
│           ├── page.tsx       # /en/careers/jobs/internships
│           ├── [program]/page.tsx  # /en/careers/jobs/internships/[program]
│           └── ctf-challenge/page.tsx  # /en/careers/jobs/internships/ctf-challenge
├── products/
│   ├── page.tsx               # /en/products
│   ├── css/page.tsx           # /en/products/css
│   ├── evenue/page.tsx        # /en/products/evenue
│   ├── zisoft/page.tsx        # /en/products/zisoft
│   ├── zi-games/page.tsx      # /en/products/zi-games
│   └── cybersecurity-awareness-campaigns/page.tsx
├── services/
│   ├── page.tsx               # /en/services
│   ├── application-security/page.tsx
│   ├── professional/page.tsx
│   ├── security/page.tsx
│   └── security-training/page.tsx
├── partners/
│   ├── page.tsx               # /en/partners
│   ├── become/page.tsx        # /en/partners/become
│   ├── portal/page.tsx        # /en/partners/portal
│   └── locator/
│       ├── page.tsx           # /en/partners/locator
│       ├── africa/page.tsx    # /en/partners/locator/africa
│       ├── europe/page.tsx    # /en/partners/locator/europe
│       ├── middle-east/page.tsx # /en/partners/locator/middle-east
│       └── usa/page.tsx       # /en/partners/locator/usa
├── support/
│   ├── page.tsx               # /en/support
│   ├── contact/page.tsx       # /en/support/contact
│   ├── demo/page.tsx          # /en/support/demo
│   ├── quote/page.tsx         # /en/support/quote
│   └── technical/page.tsx     # /en/support/technical
└── privacy-policy/page.tsx    # /en/privacy-policy
```

### Translation Namespace Mapping

Each route section has a corresponding namespace in the translation files:

| Route Section        | Translation Namespace     | Example Usage                                |
| -------------------- | ------------------------- | -------------------------------------------- |
| `/company/about`     | `pages.company.about`     | `useTranslations('pages.company.about')`     |
| `/careers/jobs`      | `pages.careers.jobs`      | `useTranslations('pages.careers.jobs')`      |
| `/products/css`      | `pages.products.css`      | `useTranslations('pages.products.css')`      |
| `/services/security` | `pages.services.security` | `useTranslations('pages.services.security')` |
| `/partners/locator`  | `pages.partners.locator`  | `useTranslations('pages.partners.locator')`  |
| `/support/contact`   | `pages.support.contact`   | `useTranslations('pages.support.contact')`   |

### Dynamic Route Translations

For dynamic routes, translations are organized to support parameter-based content:

```typescript
// For dynamic job pages: /careers/jobs/[slug]
const t = useTranslations('pages.careers.jobs');

// Access dynamic content using the slug parameter
const jobTitle = t(`${slug}.title`);
const jobDescription = t(`${slug}.description`);

// For dynamic announcements: /company/announcements/[id]
const t = useTranslations('pages.company.announcements');
const announcementTitle = t(`${id}.title`);
```

## Configuration Files

### 1. Routing Configuration (`src/i18n/routing.ts`)

```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
});
```

### 2. Request Configuration (`src/i18n/request.ts`)

This file handles dynamic import of the consolidated translation files based on the current locale:

```typescript
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./dictionary/${locale}.json`)).default,
  };
});
```

### 3. TypeScript Configuration (`src/types/global.d.ts`)

Improved TypeScript integration with centralized message types:

```typescript
import { routing } from '@/i18n/routing';
import { type Messages } from '@/i18n/dictionary';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
```

### 4. Layout Configuration (`src/app/[locale]/layout.tsx`)

The layout provides messages to client components to prevent hydration errors:

```typescript
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 4. Next.js Configuration (`next.config.ts`)

```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
```

## Translation Files Structure

### Page Translations

#### Home Page (`pages/home/en.json`)

```json
{
  "title": "Home Page",
  "hello": "Hello World",
  "description": "Welcome to our website",
  "getStarted": "Get started by editing",
  "saveChanges": "Save and see your changes instantly",
  "deployNow": "Deploy now",
  "readDocs": "Read our docs"
}
```

#### Home Page Arabic (`pages/home/ar.json`)

```json
{
  "title": "الصفحة الرئيسية",
  "hello": "مرحبا بالعالم",
  "description": "مرحباً بك في موقعنا الإلكتروني",
  "getStarted": "ابدأ بتحرير",
  "saveChanges": "احفظ وشاهد التغييرات فوراً",
  "deployNow": "انشر الآن",
  "readDocs": "اقرأ الوثائق"
}
```

### Component Translations

#### Navigation (`components/navigation/en.json`)

```json
{
  "home": "Home",
  "about": "About",
  "contact": "Contact",
  "services": "Services"
}
```

#### Navigation Arabic (`components/navigation/ar.json`)

```json
{
  "home": "الرئيسية",
  "about": "حول",
  "contact": "اتصل بنا",
  "services": "الخدمات"
}
```

## Component Examples

### Header Component with Authentication

The Header component demonstrates using navigation translations for user interface elements:

```typescript
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const t = useTranslations('components.navigation');

  return (
    <header>
      <div className="flex justify-between items-center py-4 px-5">
        <div className="flex items-center">
          <svg width="32" height="32" /* ... */>
            {/* SVG content */}
          </svg>
          <h1 className="font-bold text-xl">
            {t('brand_name')}
          </h1>
        </div>
        <div className="flex items-center space-x-2.5">
          {user ? (
            <>
              <span className="text-gray-700 text-sm">
                {t('welcome_message')} <b>{user.name}</b>!
              </span>
              <Button size="sm" onClick={onLogout}>
                {t('logout_button')}
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" onClick={onLogin}>
                {t('login_button')}
              </Button>
              <Button size="sm" onClick={onCreateAccount}>
                {t('signup_button')}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
```

### Welcome Component

A simple component demonstrating page-level translations:

```typescript
import React from 'react';
import { useTranslations } from 'next-intl';

export interface WelcomeProps {
  className?: string;
}

export const Welcome = ({ className }: WelcomeProps) => {
  const t = useTranslations('pages.home');

  return (
    <div className={className}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>{t('hello')}</p>
    </div>
  );
};
```

## Usage in Components

### Page Components

```typescript
import { useTranslations } from 'next-intl';

export default function CompanyAboutPage() {
  const t = useTranslations('pages.company.about'); // Maps to pages.company.about in en.json/ar.json

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <section>
        <h2>{t('ourStory')}</h2>
        <p>{t('ourMission')}</p>
      </section>
    </div>
  );
}

// Products page example
export default function ProductsPage() {
  const t = useTranslations('pages.products');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <div className="products-grid">
        <div>
          <h3>{t('css.title')}</h3>
          <p>{t('css.description')}</p>
        </div>
        <div>
          <h3>{t('evenue.title')}</h3>
          <p>{t('evenue.description')}</p>
        </div>
      </div>
    </div>
  );
}

// Dynamic route example for job details
export default function JobDetailsPage({ params }: { params: { slug: string } }) {
  const t = useTranslations('pages.careers.jobs');
  const { slug } = params;

  return (
    <div>
      <h1>{t(`${slug}.title`)}</h1>
      <p>{t(`${slug}.description`)}</p>
      <section>
        <h2>{t('requirements')}</h2>
        <ul>
          {/* Dynamic requirements based on job slug */}
        </ul>
      </section>
    </div>
  );
}
```

### Component Usage

```typescript
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const t = useTranslations('components.navigation'); // Maps to components.navigation in en.json/ar.json

  return (
    <nav>
      <ul>
        <li><a href="/">{t('home')}</a></li>
        <li><a href="/company">{t('company')}</a></li>
        <li><a href="/careers">{t('careers')}</a></li>
        <li><a href="/products">{t('products')}</a></li>
        <li><a href="/services">{t('services')}</a></li>
        <li><a href="/partners">{t('partners')}</a></li>
        <li><a href="/support">{t('support')}</a></li>
      </ul>
    </nav>
  );
}

// Header component example
export default function Header() {
  const t = useTranslations('components.layout.header');

  return (
    <header>
      <div className="header-content">
        <h1>{t('logo')}</h1>
        <p>{t('welcome')}</p>
        <button>{t('menu')}</button>
      </div>
    </header>
  );
}

// Maintenance component example
export default function Maintenance() {
  const t = useTranslations('components.shared.maintenance');

  return (
    <div className="maintenance">
      <h1>{t('title')}</h1>
      <p>{t('message')}</p>
      <p>{t('comingSoon')}</p>
    </div>
  );
}

// Partner locator component example
export default function PartnerLocator() {
  const t = useTranslations('pages.partners.locator');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <div className="regions">
        <a href="/partners/locator/africa">{t('africa.title')}</a>
        <a href="/partners/locator/europe">{t('europe.title')}</a>
        <a href="/partners/locator/middle-east">{t('middleEast.title')}</a>
        <a href="/partners/locator/usa">{t('usa.title')}</a>
      </div>
    </div>
  );
}
```

## Components Structure

The components directory follows a structured approach that mirrors the application routing for future scalability:

### Components Directory Organization

```text
src/components/
├── careers/              # Career-related components (placeholder structure)
│   └── jobs/             # Job-specific components
│       ├── internships/  # Internship components
│       └── [slug]/       # Dynamic job components
├── company/              # Company-related components (placeholder structure)
│   ├── about/            # Company about components
│   └── announcements/    # Announcement components
├── layout/               # Layout components (active)
│   └── header.tsx        # Main header component ✅
├── partners/             # Partner-related components (placeholder structure)
│   ├── become/           # Partner registration components
│   ├── locator/          # Partner locator components
│   └── portal/           # Partner portal components
├── privacy-policy/       # Privacy policy components (placeholder structure)
├── products/             # Product-related components (placeholder structure)
│   ├── css/              # CSS Security components
│   ├── evenue/           # eVenue components
│   ├── zi-games/         # Zi-Games components
│   └── zisoft/           # ZiSoft components
├── services/             # Service-related components (placeholder structure)
│   ├── application-security/ # App security components
│   ├── professional/     # Professional services components
│   ├── security/         # Security services components
│   └── security-training/ # Training components
├── shared/               # Shared utility components (active)
│   └── maintenance.tsx   # Maintenance page component ✅
├── support/              # Support-related components (placeholder structure)
│   ├── contact/          # Contact components
│   ├── demo/             # Demo request components
│   ├── quote/            # Quote request components
│   └── technical/        # Technical support components
└── ui/                   # UI component library (active - 47 components)
    ├── accordion.tsx     # Accordion component ✅
    ├── alert-dialog.tsx  # Alert dialog component ✅
    ├── button.tsx        # Button component ✅
    ├── card.tsx          # Card component ✅
    ├── form.tsx          # Form components ✅
    ├── input.tsx         # Input component ✅
    ├── navigation-menu.tsx # Navigation menu component ✅
    └── ...               # 40+ additional UI components ✅
```

### Component Implementation Status

- **✅ Active**: Contains implemented components with actual code
- **📋 Placeholder**: Directory structure ready for future component development
- **🔄 Future**: Planned for gradual implementation as features are developed

### Current Active Components

1. **Layout Components**
   - `layout/header.tsx` - Main application header

2. **Shared Components**
   - `shared/maintenance.tsx` - Maintenance page displayed on placeholder routes

3. **UI Component Library** (47 components)
   - Complete UI component library with buttons, forms, navigation, etc.
   - Based on modern design system patterns
   - Fully typed with TypeScript
   - Ready for internationalization

### Component Translation Patterns

Each component category has its own translation namespace:

```typescript
// Layout components
const headerT = useTranslations('components.layout.header');

// Shared utility components
const maintenanceT = useTranslations('components.shared.maintenance');

// UI components
const buttonT = useTranslations('components.ui.button');
const formT = useTranslations('components.ui.form');

// Future section-specific components
const jobCardT = useTranslations('components.careers.jobCard');
const productFeaturesT = useTranslations('components.products.features');
const contactFormT = useTranslations('components.support.contactForm');
```

### Scalable Component Organization

The placeholder structure allows for:

- **Modular Development**: Components can be developed incrementally per section
- **Clear Organization**: Easy to locate and manage components by business domain
- **Consistent Patterns**: Uniform translation and naming conventions
- **Future Growth**: Ready structure for expanding functionality

## URL Structure

- **English (Default)**: `http://localhost:3000/` or `http://localhost:3000/en`
- **Arabic**: `http://localhost:3000/ar`

### Complete URL Examples

| English URL                   | Arabic URL                    | Page                 |
| ----------------------------- | ----------------------------- | -------------------- |
| `/` or `/en`                  | `/ar`                         | Homepage             |
| `/en/company/about`           | `/ar/company/about`           | Company About        |
| `/en/careers/jobs`            | `/ar/careers/jobs`            | Job Listings         |
| `/en/products/css`            | `/ar/products/css`            | CSS Security Product |
| `/en/partners/locator/africa` | `/ar/partners/locator/africa` | Africa Partners      |
| `/en/support/contact`         | `/ar/support/contact`         | Contact Support      |

## Adding New Languages

1. **Add locale to routing configuration**:

   ```typescript
   // src/i18n/routing.ts
   export const routing = defineRouting({
     locales: ['en', 'ar', 'fr'], // Add new locale
     defaultLocale: 'en',
   });
   ```

2. **Create translation files**: Add the new locale to `en.json` and create `fr.json`:

   ```json
   // src/i18n/dictionary/fr.json
   {
     "pages": {
       "home": {
         "title": "Page d'accueil",
         "hello": "Bonjour le monde"
         // ... other translations
       }
     },
     "components": {
       // ... component translations
     }
   }
   ```

3. **Update request configuration**: No changes needed - dynamic imports handle new locales automatically.

## Adding New Translation Namespaces

### For a new page

1. **Add translations to both language files**:

   ```json
   // In en.json and ar.json
   {
     "pages": {
       "home": {
         /* existing */
       },
       "about": {
         /* existing */
       },
       "contact": {
         "title": "Contact Us",
         "email": "Email",
         "phone": "Phone"
       }
     }
   }
   ```

2. **Use in component**:

   ```typescript
   const t = useTranslations('pages.contact');
   ```

### For a new component

1. **Add translations to both language files**:

   ```json
   // In en.json and ar.json
   {
     "components": {
       "navigation": {
         /* existing */
       },
       "sidebar": {
         "menu": "Menu",
         "close": "Close",
         "settings": "Settings"
       }
     }
   }
   ```

2. **Use in component**:

   ```typescript
   const t = useTranslations('components.sidebar');
   ```

## Best Practices

### 1. **Consistent Key Naming**

- Use camelCase for keys: `welcomeMessage`, `submitButton`
- Keep keys descriptive and meaningful
- Group related keys logically

### 2. **Translation Organization**

- Separate translations by feature/page
- Keep component translations separate from page translations
- Use nested objects for complex structures when needed

### 3. **RTL Support for Arabic**

- Consider text direction in CSS
- Test layouts with longer Arabic text
- Use appropriate fonts that support Arabic characters

### 4. **Performance Considerations**

- Translations are loaded dynamically per route
- Only required translations are loaded
- Tree-shaking eliminates unused translations

## Common Issues and Solutions

### 1. **Hydration Errors**

**Problem**: Server/client mismatch
**Solution**: Ensure `NextIntlClientProvider` receives messages:

```typescript
<NextIntlClientProvider messages={messages}>
  {children}
</NextIntlClientProvider>
```

### 2. **Missing Translation Errors**

**Problem**: Key not found in translation files
**Solution**: Check key exists in all locale files and namespace is imported in `request.ts`

### 3. **Dynamic Imports Failing**

**Problem**: Translation files not found
**Solution**: Verify file paths and naming conventions match the import pattern

## Storybook Integration

The project includes full Storybook support for internationalization using the `storybook-next-intl` addon:

### Key Features

- **Global locale switching**: Change locale for all stories using the toolbar
- **Per-story locale configuration**: Override locale for specific stories
- **Automatic translation context**: Components using `useTranslations` work seamlessly
- **RTL support**: Arabic stories automatically use RTL layout
- **Type safety**: Full TypeScript support for translations in stories

### Package Dependencies

```json
{
  "devDependencies": {
    "storybook-next-intl": "^2.0.13",
    "storybook": "^9.0.16"
  }
}
```

For detailed Storybook configuration and usage, see the **[Storybook i18n Integration Guide](./storybook-i18n.md)**.

## Development Commands

```bash
# Start development server
npm run dev

# Start Storybook for component development
npm run storybook

# Build for production
npm run build

# Build static Storybook
npm run build-storybook

# Type checking
npm run type-check

# Linting
npm run lint
```

## Testing Translations

### In Next.js Application

1. **Visit English version**: `http://localhost:3000`
2. **Visit Arabic version**: `http://localhost:3000/ar`
3. **Check all translation keys are working**
4. **Verify no hydration warnings in console**
5. **Test navigation between locales**

### In Storybook

1. **Start Storybook**: `npm run storybook`
2. **Visit**: `http://localhost:6006`
3. **Use locale switcher**: Test components in both English and Arabic
4. **Check component stories**: Verify translations work in isolated components
5. **Test RTL layout**: Ensure Arabic text flows correctly right-to-left

## Resources

- [Next-intl Documentation](https://next-intl.dev/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Unicode CLDR](https://cldr.unicode.org/) for locale data
- [RTL CSS Guidelines](https://rtlstyling.com/)
