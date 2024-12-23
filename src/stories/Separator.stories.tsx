import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização do Separator.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Define a orientação do Separator.',
    },
    decorative: {
      control: 'boolean',
      description:
        'Indica se o Separator é decorativo ou funcional. (Default: true)',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-full space-y-4">
      <p>Content above the separator</p>
      <Separator {...args} />
      <p>Content below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex items-center space-x-4">
      <p>Content to the left</p>
      <Separator {...args} className="h-20" />
      <p>Content to the right</p>
    </div>
  ),
};

export const CustomStyled: Story = {
  args: {
    orientation: 'horizontal',
    className: 'bg-red-500',
  },
  render: (args) => (
    <div className="w-full space-y-4">
      <p>Content above the custom separator</p>
      <Separator {...args} />
      <p>Content below the custom separator</p>
    </div>
  ),
};
