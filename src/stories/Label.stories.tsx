import { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização do Label.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo exibido dentro do Label.',
    },
    htmlFor: {
      control: 'text',
      description:
        'Atributo `for` usado para associar o Label a um campo de formulário.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Default Label',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
    </div>
  ),
};

export const CustomStyle: Story = {
  args: {
    htmlFor: 'custom-label',
    children: 'Custom Styled Label',
    className: 'text-red-500 font-bold',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
    </div>
  ),
};
