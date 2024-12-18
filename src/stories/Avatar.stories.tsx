import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    className: { control: 'text', description: 'Classe personalizada do Avatar' },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/shadcn.png" alt="Default Avatar" />
        <AvatarFallback>SC</AvatarFallback>
      </>
    ),
    className: '',
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <AvatarImage
          src="https://placekitten.com/200/200"
          alt="Avatar com imagem"
        />
        <AvatarFallback>KT</AvatarFallback>
      </>
    ),
  },
};

export const WithFallback: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="" alt="Avatar vazio" />
        <AvatarFallback>AB</AvatarFallback>
      </>
    ),
  },
};

export const CustomSize: Story = {
  args: {
    className: 'h-20 w-20',
    children: (
      <>
        <AvatarImage
          src="https://placekitten.com/300/300"
          alt="Avatar grande"
        />
        <AvatarFallback>LG</AvatarFallback>
      </>
    ),
  },
};
