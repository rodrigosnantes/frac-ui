import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    elementTrigger: {
      control: 'none',
      description: 'Elemento que dispara o Popover.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do Popover.',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    elementTrigger: <Button>Open Popover</Button>,
    children: <p>This is a simple Popover content.</p>,
  },
  render: (args) => <Popover {...args} />,
};

export const CustomStyled: Story = {
  args: {
    elementTrigger: <Button variant="outline">Custom Trigger</Button>,
    children: (
      <div className="p-4 bg-blue-50 border border-blue-300 rounded-md">
        <p>This Popover has custom styling!</p>
      </div>
    ),
  },
  render: (args) => <Popover {...args} />,
};

export const ComplexContent: Story = {
  args: {
    elementTrigger: <Button>More Options</Button>,
    children: (
      <div className="space-y-2">
        <p className="font-bold">Popover Title</p>
        <p className="text-sm">This is more detailed content inside the Popover.</p>
        <Button variant="default">Action</Button>
      </div>
    ),
  },
  render: (args) => <Popover {...args} />,
};
