import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'purple',
  label: 'Click me!',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'outline',
  label: 'Click me!',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'outlinePurple',
  label: 'Click me!',
}
