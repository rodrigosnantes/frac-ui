import { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

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
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="flex flex-col gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: (args) => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};