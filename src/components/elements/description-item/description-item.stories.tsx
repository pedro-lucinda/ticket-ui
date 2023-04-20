import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import { IDescriptionItemProps, DescriptionItem } from '.'

export default {
  title: 'Elements/DescriptionItem',
  component: DescriptionItem,
} as Meta

const Template: StoryFn<IDescriptionItemProps> = (args) => (
  <DescriptionItem {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  content: 'Staples Center, Los Angeles, CA, US',
  label: 'Location',
}
