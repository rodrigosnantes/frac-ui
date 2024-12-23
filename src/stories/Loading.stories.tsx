import { Meta, StoryObj } from '@storybook/react';
import { Loading, LoadingProps } from '@/components/ui/loading';

const meta: Meta<typeof Loading> = {
  title: 'ui/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Define o tamanho do spinner de carregamento.',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização personalizada.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};
