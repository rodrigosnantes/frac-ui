import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm, FormProvider } from 'react-hook-form';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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
    label: {
      control: 'text',
      description: 'Texto da label associada ao checkbox.',
    },
    name: { control: 'text', description: 'Nome do campo no formulário.' },
    className: {
      control: 'text',
      description: 'Classe para customizar o estilo do checkbox.',
    },
    containerclass: {
      control: 'text',
      description: 'Classe para customizar o container do checkbox.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { terms: false },
    });

    return (
      <FormProvider {...methods}>
        <div className="p-4">
          <Checkbox name="terms" label="I agree to the terms and conditions" />
        </div>
      </FormProvider>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { terms: false },
    });

    methods.setError('terms', {
      type: 'custom',
      message: 'You must accept the privacy policy to continue.',
    });

    return (
      <FormProvider {...methods}>
        <div className="p-4">
          <Checkbox
            name="terms"
            label="Accept Privacy Policy"
            rules={{
              required: 'You must accept the privacy policy to continue.',
            }}
          />
        </div>
      </FormProvider>
    );
  },
};

export const CustomStyles: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { subscribe: false },
    });

    return (
      <FormProvider {...methods}>
        <div className="p-4">
          <Checkbox
            name="subscribe"
            label="Subscribe to newsletter"
            className="border-red-500"
            containerclass="flex items-center space-x-4"
          />
        </div>
      </FormProvider>
    );
  },
};

export const MultipleCheckboxes: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { option1: false, option2: false },
    });

    return (
      <FormProvider {...methods}>
        <div className="p-4 space-y-4">
          <Checkbox name="option1" label="Option 1" />
          <Checkbox name="option2" label="Option 2" />
        </div>
      </FormProvider>
    );
  },
};
