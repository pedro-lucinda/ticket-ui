import { Meta, StoryFn } from '@storybook/react'
import { LoadingComponent, LoadingComponentProps } from '.'

export default {
  title: 'Modules/LoadingComponent',
  component: LoadingComponent,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Loading...',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['purple'],
      },
    },
  },
} as Meta

const Template: StoryFn<LoadingComponentProps> = (args) => (
  <LoadingComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Loading...',
}

export const Primary = Template.bind({})
Primary.args = {}
