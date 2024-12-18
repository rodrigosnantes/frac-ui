import { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof AlertDialog> = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  argTypes: {
    title: { control: 'text', description: 'Título principal do dialog' },
    subtitle: { control: 'text', description: 'Subtítulo ou descrição do dialog' },
    cancelSettings: {
      control: 'object',
      description: 'Configurações do botão de cancelar',
    },
    confirmSettings: {
      control: 'object',
      description: 'Configurações do botão de confirmação',
    },
    elementTriggerSettings: {
      control: 'object',
      description: 'Configurações do elemento trigger que abre o dialog',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    title: 'Default Alert Dialog',
    subtitle: 'Are you sure you want to continue?',
    elementTriggerSettings: {
      children: <Button>Open Dialog</Button>,
    },
    cancelSettings: {
      show: true,
      label: 'Cancel',
    },
    confirmSettings: {
      show: true,
      label: 'Continue',
    },
    rootSettings: {
      open: false,
    },
  },
};

export const WithCustomButtons: Story = {
  args: {
    title: 'Custom Alert Dialog',
    subtitle: 'This dialog has custom buttons.',
    elementTriggerSettings: {
      children: <Button variant="outline">Open Custom Dialog</Button>,
    },
    cancelSettings: {
      show: true,
      label: 'Go Back',
      className: 'bg-red-500 text-white',
    },
    confirmSettings: {
      show: true,
      label: 'Proceed',
      className: 'bg-green-500 text-white',
    },
    rootSettings: {
      open: false,
    },
  },
};

export const WithoutCancelButton: Story = {
  args: {
    title: 'No Cancel Button',
    subtitle: 'This dialog only has a confirmation button.',
    elementTriggerSettings: {
      children: <Button>Open Dialog Without Cancel</Button>,
    },
    cancelSettings: {
      show: false,
    },
    confirmSettings: {
      show: true,
      label: 'OK',
    },
  },
};

export const DisabledConfirm: Story = {
  args: {
    title: 'Confirm Disabled',
    subtitle: 'The confirm button is disabled.',
    elementTriggerSettings: {
      children: <Button>Open Disabled Confirm</Button>,
    },
    cancelSettings: {
      show: true,
      label: 'Close',
    },
    confirmSettings: {
      show: true,
      label: 'Confirm',
      disabled: true,
    },
  },
};
