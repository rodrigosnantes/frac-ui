import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@/components/ui/alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: false, // Exibe todas as props no painel de controle.
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  argTypes: {
    modelSettings: {
      control: 'object',
      description: 'Configurações do container principal do alerta.',
    },
    titleSettings: {
      control: 'object',
      description: 'Configurações do título do alerta.',
    },
    descriptionSettings: {
      control: 'object',
      description: 'Configurações da descrição do alerta.',
    },
    childrenSettings: {
      control: 'object',
      description: 'Configurações dos filhos do alerta.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    modelSettings: {
      variant: 'default',
      className: '',
    },
    titleSettings: {
      title: 'Default Alert',
      className: '',
    },
    descriptionSettings: {
      description: 'This is a default alert description.',
      className: '',
    },
    childrenSettings: {
      children: null,
      className: '',
    },
  },
};

export const Success: Story = {
  args: {
    modelSettings: {
      variant: 'success',
      className: '',
    },
    titleSettings: {
      title: 'Success Alert',
      className: '',
    },
    descriptionSettings: {
      description: 'This is a success alert description.',
      className: '',
    },
    childrenSettings: {
      children: <p>Additional content for success alert.</p>,
      className: '',
    },
  },
};

export const Info: Story = {
  args: {
    modelSettings: {
      variant: 'info',
      className: '',
    },
    titleSettings: {
      title: 'Info Alert',
      className: '',
    },
    descriptionSettings: {
      description: 'This is an info alert description.',
      className: '',
    },
    childrenSettings: {
      children: null,
      className: '',
    },
  },
};

export const Error: Story = {
  args: {
    modelSettings: {
      variant: 'error',
      className: '',
    },
    titleSettings: {
      title: 'Error Alert',
      className: '',
    },
    descriptionSettings: {
      description: 'This is an error alert description.',
      className: '',
    },
    childrenSettings: {
      children: null,
      className: '',
    },
  },
};

export const Warning: Story = {
  args: {
    modelSettings: {
      variant: 'warning',
      className: '',
    },
    titleSettings: {
      title: 'Warning Alert',
      className: '',
    },
    descriptionSettings: {
      description: 'This is a warning alert description.',
      className: '',
    },
    childrenSettings: {
      children: null,
      className: '',
    },
  },
};
