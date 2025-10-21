// import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Maintenance } from '@/components/shared/maintenance';

const meta: Meta<typeof Maintenance> = {
  title: 'components/shared/Maintenance',
  component: Maintenance,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A full-screen maintenance page component that displays when the site is under maintenance. 

**Key Features:**
- Smooth entrance animations using Framer Motion
- Responsive design that adapts to different screen sizes
- Dark/light mode support
- Animated maintenance icon with continuous motion
- Call-to-action button to navigate back home

**Animation Sequence:**
1. Tool icon slides in from top with continuous scale/rotate animation
2. "We'll Be Back Soon!" heading fades in with upward motion
3. Description text follows with similar animation
4. "Go Back Home" button scales in from smaller size

**Usage:**
This component is typically used as a standalone page when the website is undergoing maintenance or updates.
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default maintenance page with all animations and styling.
 * Shows the complete maintenance experience with animated elements.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The default maintenance page with all animations enabled, showing the tool icon, heading, description, and navigation button.',
      },
    },
  },
};
