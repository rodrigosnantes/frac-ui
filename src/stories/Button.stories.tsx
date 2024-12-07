import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

// Defina os metadados para as histórias
const meta = {
  title: 'UI/Button', // Nome da categoria e do componente no Storybook
  component: Button,
  parameters: {
    layout: 'centered', // Centraliza o componente na Canvas do Storybook
  },
  tags: ['autodocs'], // Gera automaticamente a documentação
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'link', 'error', 'success', 'info', 'warning'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Botão Padrão',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Botão Contorno',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Botão Link',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'default',
    children: 'Botão Erro',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'default',
    children: 'Botão Sucesso',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    size: 'default',
    children: 'Botão Informativo',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'default',
    children: 'Botão Aviso',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Botão Pequeno',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Botão Grande',
  },
};

export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: '⭐',
  },
};
