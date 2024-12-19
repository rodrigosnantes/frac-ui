import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input, InputModel, InputTypes } from '@/components/ui/input';
import { useForm, FormProvider } from 'react-hook-form';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do campo de formulário.',
    },
    type: {
      control: 'select',
      options: Object.values(InputTypes),
      description: 'Tipo do input.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder exibido no campo.',
    },
    className: {
      control: 'text',
      description: 'Classe CSS personalizada para estilização do input.',
    },
    rules: {
      control: 'object',
      description: 'Regras de validação (React Hook Form).',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { defaultInput: '' },
    });

    return (
      <FormProvider {...methods}>
        <form className="space-y-4">
          <Input
            name="defaultInput"
            control={methods.control}
            placeholder="Type something..."
          />
        </form>
      </FormProvider>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { validatedInput: '' },
    });

    return (
      <FormProvider {...methods}>
        <form className="space-y-4">
          <Input
            name="validatedInput"
            control={methods.control}
            placeholder="Enter your email"
            type="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
          />
        </form>
      </FormProvider>
    );
  },
};

export const WithDifferentTypes: Story = {
  render: () => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form className="space-y-4">
          <Input
            name="textInput"
            control={methods.control}
            placeholder="Text input"
            type="text"
          />
          <Input
            name="numberInput"
            control={methods.control}
            placeholder="Number input"
            type="number"
          />
          <Input
            name="passwordInput"
            control={methods.control}
            placeholder="Password input"
            type="password"
          />
          <Input
            name="colorInput"
            control={methods.control}
            type="color"
          />
        </form>
      </FormProvider>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const methods = useForm({
      defaultValues: { styledInput: '' },
    });

    return (
      <FormProvider {...methods}>
        <form className="space-y-4">
          <Input
            name="styledInput"
            control={methods.control}
            placeholder="Custom styled input"
            className="border-red-500 focus:ring-red-500"
          />
        </form>
      </FormProvider>
    );
  },
};
