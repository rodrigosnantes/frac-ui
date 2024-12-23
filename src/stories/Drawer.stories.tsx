import { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
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
  argTypes: {
    shouldScaleBackground: {
      control: 'boolean',
      description: 'Define se o fundo deve escalar ao abrir o drawer.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Default Drawer</DrawerTitle>
          <DrawerDescription>
            This is a basic drawer with a title and description.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Here you can place the main content of the drawer.</p>
        </div>
        <DrawerFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {
    shouldScaleBackground: true,
  },
};

export const WithoutFooter: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Without Footer</DrawerTitle>
          <DrawerDescription>
            This drawer does not have a footer.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Content of the drawer without footer actions.</p>
        </div>
      </DrawerContent>
    </Drawer>
  ),
  args: {
    shouldScaleBackground: false,
  },
};

export const CustomStyledDrawer: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>
        <Button>Open Custom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-blue-50 border-blue-300">
        <DrawerHeader>
          <DrawerTitle>Custom Styled Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer has custom background and border styles.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>
            This is an example of how you can style the drawer using
            `className`.
          </p>
        </div>
        <DrawerFooter>
          <Button variant="outline">Dismiss</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {
    shouldScaleBackground: true,
  },
};
