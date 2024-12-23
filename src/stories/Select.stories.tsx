import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/ui/select';
import { useForm, FormProvider } from 'react-hook-form';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    control: {
      control: 'none',
      description: 'Instância do `control` do React Hook Form.',
    },
    rules: {
      control: 'object',
      description: 'Regras de validação para o campo.',
    },
    name: {
      control: 'text',
      description: 'Nome do campo no formulário.',
    },
    label: {
      control: 'text',
      description: 'Rótulo exibido dentro do dropdown.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder exibido no campo.',
    },
    options: {
      control: 'object',
      description: 'Array de objetos contendo as opções para o dropdown.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="space-y-4">
        <Select {...args} control={methods.control} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => Template(args),
  args: {
    name: 'select',
    placeholder: 'Select an option',
    label: 'Options',
    rules: { required: 'Please select an option' },
    options: [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
      { name: 'Option 3', value: '3' },
    ],
  },
};