import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'error', 'success', 'info', 'warning'],
      description: 'Define o estilo do Badge.',
    },
    className: {
      control: 'text',
      description: 'Adiciona classes personalizadas ao Badge.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo exibido dentro do Badge.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Badge',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Badge',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Badge',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Badge',
  },
};

export const CustomClass: Story = {
  args: {
    variant: 'default',
    children: 'Custom Badge',
    className: 'bg-purple-500 text-white',
  },
};
