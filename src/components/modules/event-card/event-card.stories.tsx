import { Meta, StoryFn } from '@storybook/react'
import { EventCard } from '.'
import { IEvent } from '@/store/events-store'

export default {
  title: 'Modules/EventCard',
  component: EventCard,
} as Meta

const Template: StoryFn<IEvent> = (args) => <EventCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  id: '1',
  date: '2023-04-19T10:30:15.478Z',
  description:
    'An amazing event with great speakers. An amazing event with great speakers. An amazing event with great speakers.',
  image:
    'https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'Drake 2010 Drake World Tour San Francisco',
}
