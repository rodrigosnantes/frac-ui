import { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { useForm, FormProvider } from 'react-hook-form';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do campo de formulário associado ao Switch.',
    },
    label: {
      control: 'text',
      description: 'Texto de rótulo exibido próximo ao Switch.',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização do Switch.',
    },
    classContainer: {
      control: 'text',
      description:
        'Classes adicionais para estilização do container do Switch.',
    },
    rules: {
      control: 'object',
      description: 'Regras de validação para o campo (React Hook Form).',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="space-y-4">
        <Switch {...args} control={methods.control} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => Template(args),
  args: {
    name: 'switch',
    label: 'Enable Feature',
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const methods = useForm({
      defaultValues: {
        [args.name]: false,
      },
    });

    const { setError } = methods;

    setError(args.name, {
      type: 'manual',
      message: 'You must accept this to proceed!',
    });
    
    return (
      <FormProvider {...methods}>
        <Switch {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'validatedSwitch',
    label: 'Accept Terms',
    rules: { required: 'You must accept the terms to proceed' },
  },
};

export const CustomStyled: Story = {
  render: (args) => Template(args),
  args: {
    name: 'customSwitch',
    label: 'Custom Styled Switch',
    className: 'border border-red-500',
    classContainer: 'bg-blue-100 p-2 rounded-md',
  },
};
