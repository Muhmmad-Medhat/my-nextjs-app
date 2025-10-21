# Storybook and Testing Guide

This guide covers the Storybook setup and testing configuration for the Zinad Website project.

## Overview

The project uses **Storybook** for component development and documentation, integrated with **Vitest** for automated testing of components. This setup provides:

- **Component Development**: Isolated development environment for UI components
- **Documentation**: Automatic documentation generation for components
- **Accessibility Testing**: Built-in accessibility checks
- **Visual Testing**: Browser-based testing with Playwright
- **Story Testing**: Automated testing of Storybook stories

## Storybook Configuration

### Framework Setup

The project uses `@storybook/nextjs-vite` as the framework, providing:

- Next.js App Router support
- Vite for fast builds
- TypeScript support
- CSS import handling

### Addons

| Addon                         | Purpose                      |
| ----------------------------- | ---------------------------- |
| `@storybook/addon-onboarding` | Getting started guidance     |
| `@chromatic-com/storybook`    | Visual regression testing    |
| `@storybook/addon-docs`       | Automatic documentation      |
| `@storybook/addon-a11y`       | Accessibility testing        |
| `@storybook/addon-vitest`     | Vitest integration           |
| `storybook-next-intl`         | Internationalization support |

### Configuration Files

```text
.storybook/
├── main.ts           # Main Storybook configuration
├── preview.tsx       # Global parameters, decorators, and i18n setup
├── tsconfig.json     # TypeScript configuration for Storybook
└── vitest.setup.ts   # Vitest testing setup
```

### Internationalization Setup

Storybook is configured with full i18n support using the `storybook-next-intl` addon. See the **[Storybook i18n Integration Guide](./storybook-i18n.md)** for complete details on:

- Global locale switching
- Per-story locale configuration
- Translation testing across all components

## Available Scripts

```bash
# Development
npm run storybook        # Start Storybook dev server on port 6006
npm run build-storybook  # Build static Storybook

# Testing
npm run test            # Run Vitest tests (if configured)
```

## Writing Stories

### Basic Story Structure

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'components/ui/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define controls for component props
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Component variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example',
  },
};
```

### Story Organization

Stories should be organized following this pattern:

```text
src/components/
├── ui/
│   ├── button.tsx
│   └── button.stories.tsx    # Stories for button component
├── layout/
│   ├── header.tsx
│   └── header.stories.tsx    # Stories for header component
└── ...
```

### Story Naming Convention

- **File naming**: `ComponentName.stories.tsx`
- **Story titles**: Use the format `components/category/ComponentName`
- **Story exports**: Use descriptive names like `Default`, `Primary`, `Large`, etc.

## Component Examples

### Button Component Stories

The project includes comprehensive Button component stories demonstrating:

- **Variants**: Default, destructive, outline, secondary, ghost, link
- **Sizes**: Default, small, large, icon
- **States**: Normal, disabled
- **Interactivity**: Click handlers and event handling

Example stories include:

- `Default` - Basic button
- `Secondary` - Secondary variant
- `Destructive` - Destructive actions
- `Outline` - Outlined style
- `Ghost` - Minimal style
- `Link` - Link appearance
- `Small/Large` - Size variations
- `Icon` - Icon-only button
- `Disabled` - Disabled state

## Testing Integration

### Vitest Configuration

The project uses Vitest with browser testing capabilities:

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    projects: [
      {
        plugins: [storybookTest({ configDir: '.storybook' })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
          },
        },
      },
    ],
  },
});
```

### Accessibility Testing

Accessibility testing is automatically enabled for all stories:

```typescript
// .storybook/preview.ts
parameters: {
  a11y: {
    test: 'todo', // Show a11y violations in test UI
  },
}
```

## Development Workflow

### 1. Creating New Components

1. Create your component in `src/components/`
2. Create corresponding `.stories.tsx` file
3. Define comprehensive stories covering all variants
4. Test accessibility and responsiveness
5. Run `npm run storybook` to verify

### 2. Testing Components

1. Stories are automatically tested when running Vitest
2. Accessibility checks run automatically
3. Visual regression testing available via Chromatic

### 3. Documentation

- Documentation is automatically generated from stories
- Use JSDoc comments in components for better documentation
- ArgTypes provide interactive controls and documentation

## Best Practices

### Story Writing

1. **Cover all variants**: Create stories for each prop combination
2. **Use realistic data**: Provide meaningful example content
3. **Document interactions**: Include click handlers and state changes
4. **Test edge cases**: Include disabled states, loading states, etc.

### Component Development

1. **Start with stories**: Define expected behavior before implementation
2. **Use TypeScript**: Leverage type safety for props and stories
3. **Test accessibility**: Ensure components meet accessibility standards
4. **Mobile-first**: Test stories on different viewport sizes

### Accessibility

1. **Use semantic HTML**: Proper heading structure, labels, etc.
2. **Test keyboard navigation**: Ensure all interactive elements are accessible
3. **Check color contrast**: Verify sufficient contrast ratios
4. **Screen reader testing**: Test with assistive technologies

## Troubleshooting

### Common Issues

#### Storybook not starting

```bash
# Clear cache and reinstall
npm run clean
npm install
npm run storybook
```

#### Stories not loading

- Check file naming convention (`*.stories.tsx`)
- Verify story structure matches Meta/StoryObj types
- Check for TypeScript errors in stories

#### Import errors

- Ensure all imports use correct paths
- Use `@storybook/nextjs-vite` for Meta/StoryObj types
- Avoid importing from `@storybook/react` directly

#### Testing issues

- Verify Vitest configuration matches project structure
- Check browser testing setup for Playwright
- Ensure story setup files are properly configured

### Debugging

1. **Check console**: Look for error messages in browser console
2. **Verify file structure**: Ensure stories follow naming conventions
3. **Test individual stories**: Isolate problematic stories
4. **Check TypeScript**: Resolve any type errors

## Additional Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Vitest Testing Guide](https://vitest.dev/guide/)
- [Accessibility Testing](https://storybook.js.org/docs/writing-tests/accessibility-testing)
- [Next.js Integration](https://storybook.js.org/docs/get-started/nextjs)

---

Last updated: July 14, 2025
