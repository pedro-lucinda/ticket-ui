import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { NavLink, NavLinkProps } from '.'

export default {
  title: 'Components/NavLink',
  component: NavLink,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Home',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: StoryFn<NavLinkProps> = (args) => <NavLink {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Home',
}
