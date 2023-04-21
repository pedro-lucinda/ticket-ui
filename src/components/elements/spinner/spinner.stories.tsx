import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Spinner, SpinnerProps } from '.'

export default {
  title: 'Elements/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      defaultValue: 'sm',
    },
    color: {
      control: {
        type: 'select',
        options: ['purple'],
      },
      defaultValue: 'purple',
    },
  },
} as Meta

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'sm',
  color: 'purple',
}

export const Primary = Template.bind({})
Primary.args = {
  size: 'md',
  color: 'purple',
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'lg',
  color: 'purple',
}
