import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
// import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'components/ui/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the card',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const WithOnlyContent: Story = {
  args: {
    children: (
      <CardContent className="p-6">
        <p>This card only has content.</p>
      </CardContent>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Header Only Card</CardTitle>
        </CardHeader>
        <CardFooter>
          <p>This card has a header and a footer.</p>
        </CardFooter>
      </>
    ),
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'border-purple-500 shadow-lg shadow-purple-200',
    children: (
      <>
        <CardHeader>
          <CardTitle>Custom Styled Card</CardTitle>
          <CardDescription>
            This card has custom border and shadow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>You can apply any Tailwind CSS classes.</p>
        </CardContent>
      </>
    ),
  },
};
