import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description:
        'Define o tipo de comportamento do Accordion. "single" permite apenas uma aba aberta por vez. "multiple" permite várias abas abertas.',
    },
    defaultValue: {
      control: 'text',
      description: 'Aba(s) aberta(s) inicialmente.',
    },
    collapsible: {
      control: 'boolean',
      description:
        'Se as abas podem ser recolhidas ao serem clicadas novamente.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 1.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 2.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 3.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
  },
};

export const MultipleOpen: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 1.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 2.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for Section 3.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'multiple',
  },
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" className="border-red-500">
        <AccordionTrigger className="text-red-500">
          Custom Section 1
        </AccordionTrigger>
        <AccordionContent className="bg-red-50">
          <p>This is the content for Custom Section 1.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-blue-500">
        <AccordionTrigger className="text-blue-500">
          Custom Section 2
        </AccordionTrigger>
        <AccordionContent className="bg-blue-50">
          <p>This is the content for Custom Section 2.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'single',
  },
};