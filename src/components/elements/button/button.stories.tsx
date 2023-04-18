import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Click me!',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  label: 'Click me!',
}
