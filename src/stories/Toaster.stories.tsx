import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toaster, ToastProvider, useToasty } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

const Template = () => {
  const { toast } = useToasty();

  const showDefaultToast = () =>
    toast({
      title: 'Default Toast',
      description: 'This is a default toast message.',
    });

  const showSuccessToast = () =>
    toast({
      title: 'Action Required',
      description: 'You need to perform an action.',
      variant: 'success',
    });
  const showErrorToast = () =>
    toast({
      title: 'Error Occurred',
      description: 'Something went wrong.',
      variant: 'error',
    });

  const showActionToast = () =>
    toast({
      title: 'Action Required',
      description: 'You need to perform an action.',
      action: (
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => alert('Action clicked!')}
        >
          Click Me
        </button>
      ),
    });

  const showInfoToast = () =>
    toast({
      title: 'Action Required',
      description: 'You need to perform an action.',
      variant: 'info',
    });

  const showWarningToast = () =>
    toast({
      title: 'Action Required',
      description: 'You need to perform an action.',
      variant: 'warning',
    });

  return (
    <ToastProvider>
      <div className="flex gap-4">
        <Button onClick={showDefaultToast}>Show Default Toast</Button>
        <Button onClick={showErrorToast}>Show Error Toast</Button>
        <Button onClick={showSuccessToast}>Show success Toast</Button>
        <Button onClick={showInfoToast}>Show info Toast</Button>
        <Button onClick={showWarningToast}>Show warning Toast</Button>
        <Button onClick={showActionToast}>Show Action Toast</Button>
        <Toaster />
      </div>
    </ToastProvider>
  );
};

export const Default: Story = {
  render: () => <Template />,
};
