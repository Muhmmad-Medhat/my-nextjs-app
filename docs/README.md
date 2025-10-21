# 📚 Zinad Website Documentation

This directory contains comprehensive documentation for the Zinad Website project, covering all aspects of development from internationalization to component development and testing.

## 🔥 Latest Updates

### 🚀 i18n Structure Improvement (Recently Updated!)

We've consolidated our internationalization structure for better performance and developer experience:

- **Single source of truth**: 2 files instead of 12+ separate files
- **Better performance**: Fewer HTTP requests and improved bundle optimization
- **Improved DX**: Better TypeScript support and easier management

**📋 Action Required for Team Members:**

- **Quick Start**: [`../TEAM_UPDATE_I18N_PREVIEW.md`](../TEAM_UPDATE_I18N_PREVIEW.md) - 2 min read
- **Full Guide**: [`../TEAM_UPDATE_I18N.md`](../TEAM_UPDATE_I18N.md) - Complete step-by-step instructions

---

## 📖 Available Documentation

### [Internationalization Guide](./internationalization.md) ⭐ **Updated**

Complete documentation for the new consolidated i18n implementation including:

- **🆕 Consolidated Structure** - New 2-file approach vs old 12+ files
- **🗺️ Comprehensive Routing** - Complete application route structure with Next.js 15 App Router
- **Setup and Configuration** - Updated configuration for better performance
- **Translation Structure** - New namespace patterns (`pages.company.about`, `pages.careers.jobs`)
- **Route-Translation Mapping** - How routes map to translation namespaces
- **Usage Examples** - Updated code examples for all new pages and sections
- **Dynamic Route Support** - Handling dynamic routes with translations
- **Migration Guide** - How to update from old to new structure
- **Adding New Languages** - Step-by-step guide for new locales
- **Best Practices** - Recommended patterns and approaches
- **Troubleshooting** - Common issues and solutions

### [Quick Reference Guide](./quick-reference.md) ⭐ **Updated**

Essential development patterns and commands including:

- **🆕 i18n Quick Patterns** - New translation usage examples for all application sections
- **🗺️ Application Routes** - Complete route structure with translation namespaces
- **Migration Quick Reference** - Old vs new usage table
- **Route-Translation Examples** - How to use translations in different sections
- **Dynamic Route Patterns** - Working with dynamic routes and translations
- **Development Commands** - All essential npm scripts
- **Common Workflows** - Step-by-step development processes
- **Troubleshooting** - Quick fixes for common issues

### [Storybook i18n Integration Guide](./storybook-i18n.md) ⭐ **New**

Complete documentation for Storybook internationalization integration including:

- **Storybook next-intl Setup** - Configuration with `storybook-next-intl` addon
- **Global Locale Controls** - Toolbar locale switching for all stories
- **Per-Story Locale Override** - Story-specific locale configuration
- **Translation Component Examples** - Components using `useTranslations`
- **RTL Language Support** - Arabic language with proper RTL layout
- **TypeScript Integration** - Proper typing for translation messages

### [Storybook and Testing Guide](./storybook-testing.md)

Complete documentation for Storybook setup and testing configuration including:

- **Component Development** - Isolated development environment setup
- **Testing Integration** - Vitest and browser testing configuration
- **Story Writing** - Best practices for creating component stories
- **Accessibility Testing** - Built-in accessibility checks and guidelines
- **Troubleshooting** - Common issues and solutions for Storybook

### Team Communication

| Document                                                             | Description                            | Audience          |
| -------------------------------------------------------------------- | -------------------------------------- | ----------------- |
| **[../TEAM_UPDATE_I18N_PREVIEW.md](../TEAM_UPDATE_I18N_PREVIEW.md)** | Quick overview of i18n changes         | Busy team members |
| **[../TEAM_UPDATE_I18N.md](../TEAM_UPDATE_I18N.md)**                 | Complete migration guide with examples | All developers    |
| **[../I18N_STRUCTURE.md](../I18N_STRUCTURE.md)**                     | New consolidated structure overview    | Team members      |

## 🎯 Documentation by Role

### 👩‍💻 **Frontend Developers**

**Essential Reading:**

1. [Quick Reference](./quick-reference.md) - Daily development patterns
2. [Internationalization Guide](./internationalization.md) - Complete i18n setup
3. [Storybook & Testing](./storybook-testing.md) - Component development

### 👥 **New Team Members**

**Onboarding Path:**

1. [Project README](../README.md) - Start here
2. [i18n Update Preview](../TEAM_UPDATE_I18N_PREVIEW.md) - Latest changes
3. [Quick Reference](./quick-reference.md) - Daily patterns
4. [Complete i18n Guide](./internationalization.md) - Deep dive

### 🎨 **UI/UX Developers**

**Component Focus:**

1. [Storybook & Testing](./storybook-testing.md) - Component development
2. [Quick Reference](./quick-reference.md) - Common patterns
3. [i18n Guide](./internationalization.md) - Text and translations

## Quick Start

### Development

1. **Pull latest changes** (Important for i18n updates):

   ```bash
   git pull origin main
   ```

2. **Update translation calls** if working with i18n:

   ```typescript
   // ✅ New pattern
   const t = useTranslations('pages.home');
   const navT = useTranslations('components.navigation');
   ```

3. **Start development**:

   ```bash
   npm run dev              # Next.js development server
   npm run storybook        # Component development
   ```

4. **Language testing**:
   - **English**: `http://localhost:3000`
   - **Arabic**: `http://localhost:3000/ar`

### Testing & Quality Assurance

```bash
npm run test-all         # Run all checks + build
npm run check-types      # TypeScript checking
npm run lint            # ESLint
npm run build           # Production build test
```

### Adding New Translations

1. **Update both language files**:
   - `src/i18n/dictionary/en.json`
   - `src/i18n/dictionary/ar.json`

2. **Use new namespace pattern**:

   ```typescript
   // For pages
   const t = useTranslations('pages.newPage');

   // For components
   const t = useTranslations('components.newComponent');
   ```

3. **Follow 3-level max nesting**:
   ```json
   {
     "pages": {
       "contact": {
         "title": "Contact Us"
       }
     }
   }
   ```

## 🏗️ New Project Structure

```text
src/i18n/dictionary/
├── en.json    # ✅ All English translations
└── ar.json    # ✅ All Arabic translations

# Removed (old structure):
# ├── pages/home/en.json
# ├── pages/about/en.json
# ├── components/navigation/en.json
# └── ... (10+ more files)
```

## Project Structure

```text
docs/
├── README.md                    # 📚 This comprehensive guide
├── internationalization.md     # 🌍 Complete i18n documentation (Updated)
├── quick-reference.md          # ⚡ Daily development patterns (Updated)
└── storybook-testing.md        # 🧪 Component development guide

Project Root:
├── TEAM_UPDATE_I18N_PREVIEW.md # 📢 Quick i18n update overview
├── TEAM_UPDATE_I18N.md         # 📋 Complete migration guide
├── I18N_STRUCTURE.md           # 🏗️ New structure overview
└── DICTIONARY_STRUCTURE.md     # 📖 Dictionary format guide
```

## 🚨 Common Issues & Quick Fixes

| Issue                   | Quick Fix                    | Documentation                                                    |
| ----------------------- | ---------------------------- | ---------------------------------------------------------------- |
| `MISSING_MESSAGE` error | Check namespace pattern      | [i18n Guide](./internationalization.md#troubleshooting)          |
| Build failures          | Run `npm run check-types`    | [Quick Reference](./quick-reference.md#troubleshooting)          |
| Translation not found   | Verify nested path structure | [i18n Guide](./internationalization.md#usage-in-components)      |
| TypeScript errors       | Check `global.d.ts` imports  | [i18n Guide](./internationalization.md#typescript-configuration) |

## 🔗 External Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev/)
- [Storybook Documentation](https://storybook.js.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**📞 Need Help?** Check the relevant documentation section above or reach out to the team!

## Contributing to Documentation

When adding new features or making changes to the internationalization system:

1. Update the relevant documentation files
2. Include code examples for new features
3. Update troubleshooting sections if needed
4. Test all examples before committing

## Getting Help

If you encounter issues with internationalization:

1. Check the [troubleshooting section](./internationalization.md#common-issues-and-solutions)
2. Verify your translation file structure matches the documentation
3. Ensure all required configurations are in place
4. Check the browser console for specific error messages

---

Last updated: July 14, 2025
