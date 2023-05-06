import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import * as nextNavigation from '../../../../__mocks__/next-navigation.mock'
import { EventCard } from '.'
import '@testing-library/jest-dom/extend-expect'

// Import and mock next/navigation hooks
jest.mock('next/navigation', () => nextNavigation)

describe('EventCard', () => {
  const mockEvent = {
    id: '1',
    date: '2023-04-19T10:30:15.478Z',
    description: 'Mock event description',
    image: 'https://example.com/mock-image.png',
    title: 'Mock event title',
    city: 'Mock event city',
    state: 'Mock event state',
    country: 'Mock event country',
    address: 'Mock event address',
    price: 400,
    currency: 'USD' as const,
  }

  test('renders the event card correctly', () => {
    render(<EventCard {...mockEvent} />)

    expect(screen.getByAltText(mockEvent.title)).toBeInTheDocument()
    expect(screen.getByText(mockEvent.title)).toBeInTheDocument()
    expect(screen.getByRole('Month')).toHaveTextContent('APR')
    expect(screen.getByRole('Day')).toHaveTextContent('19')
    expect(screen.getByText(mockEvent.description)).toBeInTheDocument()
  })

  test('navigates to the correct route when clicked', async () => {
    const { useRouter } = nextNavigation

    const mockedPush = jest.fn()
    useRouter.mockImplementation(() => ({ push: mockedPush }))

    render(<EventCard {...mockEvent} />)

    const cardElement = screen.getByRole('link')
    fireEvent.click(cardElement)

    expect(mockedPush).toHaveBeenCalledWith(`/tickets/${mockEvent.id}`)
  })
})
