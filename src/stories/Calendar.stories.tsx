import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar, FormCalendar, InputCalendar } from '@/components/ui/calendar';
import { useForm, FormProvider } from 'react-hook-form';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  parameters: {
    layout: 'centered',
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
