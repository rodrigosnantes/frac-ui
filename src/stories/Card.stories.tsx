import { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
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
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classe personalizada para o Card.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card. You can place any element here.</p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <Card className="bg-gray-100 border-gray-300">
      <CardHeader className="bg-gray-200">
        <CardTitle className="text-blue-600">Custom Styled Card</CardTitle>
        <CardDescription className="text-gray-500">
          A card with custom styles applied.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the content of the card. The background, border, and text
          colors have been customized.
        </p>
      </CardContent>
      <CardFooter className="bg-gray-200">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">
          Save
        </button>
      </CardFooter>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>This card has no footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use this variant when no actions are required.</p>
      </CardContent>
    </Card>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Long Content</CardTitle>
        <CardDescription>
          This card demonstrates how it handles longer content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          malesuada, elit nec feugiat tincidunt, lorem purus scelerisque sapien,
          eu feugiat enim libero ut arcu.
        </p>
        <p>
          Donec lacinia mi ut eros dictum, quis volutpat enim fermentum.
          Curabitur nec pharetra ligula. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">
          Close
        </button>
      </CardFooter>
    </Card>
  ),
};
