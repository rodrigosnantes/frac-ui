import { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização do ScrollArea.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo exibido dentro do ScrollArea.',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    ),
  },
  render: (args) => (
    <div className="h-40 w-64 border">
      <ScrollArea {...args} />
    </div>
  ),
};

export const HorizontalScroll: Story = {
  args: {
    children: (
      <div className="flex space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md text-center leading-[6rem]"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    ),
    className: 'overflow-x-auto',
  },
  render: (args) => (
    <div className="h-40 w-64 border">
      <ScrollArea {...args} />
    </div>
  ),
};

export const CustomStyled: Story = {
  args: {
    children: (
      <div className="space-y-4 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i} className="text-sm text-gray-600">
            Custom Content {i + 1}
          </p>
        ))}
      </div>
    ),
    className: 'bg-gray-50 border border-blue-300 rounded-md',
  },
  render: (args) => (
    <div className="h-40 w-64">
      <ScrollArea {...args} />
    </div>
  ),
};
