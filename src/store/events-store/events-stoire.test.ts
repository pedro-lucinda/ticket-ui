import { renderHook } from '@testing-library/react'
import { IEvent, useEventStore } from '.'

describe('events-store', () => {
  it('returns the correct event when calling getEvent', async () => {
    const eventMock = {
      id: '1',
      title: 'Music Festival 2023',
      date: '2023-05-25T10:30:15.478Z',
      description:
        'Join us for an unforgettable weekend of music, food, and fun!  unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! unforgettable weekend of music, food, and fun! ',
      image:
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      address: '123 Music Avenue, Los Angeles, CA 90001',
      price: 400,
      currency: 'USD' as const,
    }
    const { result } = renderHook(() => useEventStore())

    const event = await result.current.getEvent(eventMock.id)

    expect(event).toEqual(expect.objectContaining<IEvent>(eventMock))
  })
})
