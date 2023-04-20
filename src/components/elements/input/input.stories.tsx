import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import { InputProps, Input } from '.'

export default {
  title: 'Elements/Input',
  component: Input,
} as Meta

const Template: StoryFn<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Name',
  onChange: () => {
    console.log('changes')
  },
}
