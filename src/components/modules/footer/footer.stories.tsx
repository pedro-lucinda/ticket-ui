import { Meta, StoryFn } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Modules/Footer',
  component: Footer,
} as Meta

const Template: StoryFn = () => <Footer />

export const Primary = Template.bind({})
Primary.args = {}
