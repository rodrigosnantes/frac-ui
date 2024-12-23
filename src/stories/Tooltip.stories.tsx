import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    triggerSettings: {
      control: 'object',
      description: 'Configurações do gatilho (trigger) do Tooltip.',
    },
    contentSettings: {
      control: 'object',
      description: 'Configurações do conteúdo do Tooltip.',
    },
    delayDuration: {
      control: 'number',
      description:
        'Tempo de atraso em milissegundos antes do Tooltip aparecer.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Se o Tooltip deve estar aberto por padrão.',
    },
    onOpenChange: {
      control: 'function',
      description: 'Callback acionado quando o estado de abertura muda.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => <Tooltip {...args} />,
  args: {
    triggerSettings: {
      children: <Button>Hover me</Button>,
      className: '',
    },
    contentSettings: {
      children: 'This is a tooltip message.',
      className: '',
      sideOffset: 4,
    },
    delayDuration: 100,
    defaultOpen: false,
  },
};

export const WithCustomStyles: Story = {
  render: (args) => <Tooltip {...args} />,
  args: {
    triggerSettings: {
      children: <Button variant="outline">Custom Tooltip</Button>,
      className: 'text-blue-500',
    },
    contentSettings: {
      children: 'Custom styled tooltip content.',
      className: 'bg-blue-100 text-blue-800',
      sideOffset: 6,
    },
    delayDuration: 200,
    defaultOpen: false,
  },
};
