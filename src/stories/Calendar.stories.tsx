import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar  } from '@/components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  parameters: {
    layout: 'centered',
    controls: {
      expanded: false, // Exibe todas as props no painel de controle.
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type CalendarStory = StoryObj<typeof Calendar>;

export const Default: CalendarStory = {
  args: {
    showOutsideDays: true,
  },
};

export const CustomStyling: CalendarStory = {
  args: {
    className: 'bg-purple-300 p-5 rounded-lg',
  },
};
