import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogTrigger, DialogProps } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
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
  tags: ['autodocs'],
  argTypes: {
    dialog: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', 'full'],
      mapping: {
        sm: { size: 'sm' },
        md: { size: 'md' },
        lg: { size: 'lg' },
        xl: { size: 'xl' },
        xxl: { size: 'xxl' },
        full: { size: 'full' },
      },
      description: 'Configurações do tamanho e customização do dialog.',
    },
    dialogTrigger: {
      description: 'Elemento que dispara a abertura do dialog.',
    },
    header: {
      control: 'object',
      description: 'Título e subtítulo do cabeçalho do dialog.',
    },
    footer: {
      control: 'object',
      description: 'Ações personalizadas no rodapé.',
    },
    closeSetting: {
      control: 'object',
      description: 'Configurações do botão de fechar.',
    },
    confirmSetting: {
      control: 'object',
      description: 'Configurações do botão de confirmação.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do corpo do dialog.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    dialogTrigger: <Button>Open Dialog</Button>,
    header: {
      title: 'Default Dialog',
      subtitle: 'This is a default dialog example.',
    },
    children: <p>This is the content of the dialog.</p>,
    closeSetting: { show: true, text: 'Close' },
    confirmSetting: { show: true, text: 'Confirm' },
  },
};

export const WithCustomActions: Story = {
  args: {
    dialogTrigger: <Button variant="outline">Open Dialog</Button>,
    header: {
      title: 'Custom Actions',
      subtitle: 'Dialog with custom footer actions.',
    },
    children: <p>This is the content of the dialog.</p>,
    footer: {
      customAction: <Button variant="default">Custom Action</Button>,
    },
    closeSetting: {
      show: true,
      text: 'Cancel',
      callback: () => alert('Cancel clicked'),
    },
    confirmSetting: {
      show: true,
      text: 'Save',
      callback: () => console.log('Confirm clicked'),
    },
  },
};

export const WithoutFooter: Story = {
  args: {
    dialogTrigger: <Button>Open Dialog</Button>,
    header: { title: 'No Footer', subtitle: 'Dialog without footer actions.' },
    children: <p>This is the content of the dialog.</p>,
  },
};