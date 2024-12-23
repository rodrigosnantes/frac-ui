import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      expanded: false,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Classe personalizada do Avatar',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: (
      <React.Fragment>
        <AvatarImage
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="Default Avatar"
        />
      </React.Fragment>
    ),
  },
};

export const WithFallback: Story = {
  args: {
    children: (
      <React.Fragment>
        <AvatarImage src="" alt="Avatar vazio" />
        <AvatarFallback>AB</AvatarFallback>
      </React.Fragment>
    ),
  },
};

export const CustomSize: Story = {
  args: {
    className: 'h-20 w-20',
    children: (
      <React.Fragment>
        <AvatarImage
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="Avatar grande"
        />
        <AvatarFallback>LG</AvatarFallback>
      </React.Fragment>
    ),
  },
};

export const CustomColor: Story = {
  args: {
    className: 'h-20 w-20',
    children: (
      <React.Fragment>
        <AvatarImage
        className="bg-red-500"
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
          alt="Avatar grande"
        />
        <AvatarFallback>LG</AvatarFallback>
      </React.Fragment>
    ),
  },
};
