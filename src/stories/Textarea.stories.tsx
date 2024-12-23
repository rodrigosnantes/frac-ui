import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do campo no formulário.',
    },
    label: {
      control: 'text',
      description: 'Rótulo associado ao campo de texto.',
    },
    control: {
      control: 'object',
      description: 'Instância do `control` do React Hook Form.',
    },
    rules: {
      control: 'object',
      description: 'Regras de validação do campo.',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder para o campo.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="space-y-4">
        <Textarea {...args} control={methods.control} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => Template(args),
  args: {
    name: 'message',
    label: 'Message',
    placeholder: 'Type your message here...',
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const methods = useForm({
      defaultValues: {
        [args.name]: '',
      },
    });

    const { setError } = methods;

    setError(args.name, {
      type: 'manual',
      message: 'This is a manually triggered error.',
    });

    return (
      <FormProvider {...methods}>
        <Textarea {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'validatedTextarea',
    label: 'Validated Textarea',
    placeholder: 'Enter your message...',
    rules: {
      required: 'This field is required.',
      minLength: {
        value: 10,
        message: 'Message must be at least 10 characters long.',
      },
    },
  },
};

export const CustomStyled: Story = {
  render: (args) => Template(args),
  args: {
    name: 'styledTextarea',
    label: 'Custom Styled Textarea',
    placeholder: 'Custom style example...',
    className: 'border-blue-500 bg-blue-50 text-blue-700',
  },
};
