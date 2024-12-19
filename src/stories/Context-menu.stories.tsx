import { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@/components/ui/context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
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
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-4 border rounded-md w-48 text-center cursor-pointer">
          Right-click me
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem onSelect={() => alert('View Selected')}>
          View
          <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => alert('Edit Selected')}>
          Edit
          <ContextMenuShortcut>Ctrl+E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          onSelect={() => alert('Delete Selected')}
          className="text-red-500"
        >
          Delete
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-4 border rounded-md w-48 text-center cursor-pointer">
          Right-click me
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Options</ContextMenuLabel>
        <ContextMenuCheckboxItem checked={true}>
          Enable Notifications
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Dark Mode</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-4 border rounded-md w-48 text-center cursor-pointer">
          Right-click me
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Font Size</ContextMenuLabel>
        <ContextMenuRadioGroup value="medium">
          <ContextMenuRadioItem value="small">Small</ContextMenuRadioItem>
          <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
          <ContextMenuRadioItem value="large">Large</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-4 border rounded-md w-48 text-center cursor-pointer">
          Right-click me
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Options</ContextMenuLabel>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Sub-item 1</ContextMenuItem>
            <ContextMenuItem>Sub-item 2</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
