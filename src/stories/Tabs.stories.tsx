import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Define qual aba deve ser ativada inicialmente.',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização das abas.',
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="bg-blue-100">
        <TabsTrigger value="tab1" className="text-blue-700">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="text-blue-700">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="text-blue-700">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-blue-700">Custom Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-blue-700">Custom Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-blue-700">Custom Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
};

export const DynamicTabs: Story = {
  render: (args) => {
    const tabs = [
      { value: 'tab1', label: 'Dynamic Tab 1', content: 'Dynamic Content 1' },
      { value: 'tab2', label: 'Dynamic Tab 2', content: 'Dynamic Content 2' },
      { value: 'tab3', label: 'Dynamic Tab 3', content: 'Dynamic Content 3' },
    ];

    return (
      <Tabs {...args}>
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <p>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    );
  },
  args: {
    defaultValue: 'tab1',
  },
};
