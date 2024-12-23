import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização da tabela.',
    },
    children: {
      control: 'text',
      description:
        'Conteúdo da tabela, incluindo linhas, células e cabeçalhos.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>johndoe@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>janesmith@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableWithCaption: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Example Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>johndoe@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>janesmith@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableWithFooter: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>johndoe@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>janesmith@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Footer Content</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <Table className="border border-gray-300 rounded-md" {...args}>
      <TableCaption>Styled Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-gray-100">Name</TableHead>
          <TableHead className="bg-gray-100">Email</TableHead>
          <TableHead className="bg-gray-100">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-red-500">John Doe</TableCell>
          <TableCell className="text-red-500">johndoe@example.com</TableCell>
          <TableCell className="text-red-500">Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-blue-500">Jane Smith</TableCell>
          <TableCell className="text-blue-500">janesmith@example.com</TableCell>
          <TableCell className="text-blue-500">Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
