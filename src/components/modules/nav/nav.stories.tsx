import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { NavBar } from '.'

export default {
  title: 'Modules/NavBar',
  component: NavBar,
} as Meta

const Template: StoryFn = (args) => <NavBar {...args} />

export const Default = Template.bind({})
