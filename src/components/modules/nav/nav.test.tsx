import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import * as nextNavigation from '../../../../__mocks__/next-navigation.mock'
import { NavBar } from '.'

// Import and mock next/navigation hooks
jest.mock('next/navigation', () => nextNavigation)

describe('NavBar', () => {
  test('renders the logo and navigation links', () => {
    render(<NavBar />)
    expect(screen.getByAltText('Ticket')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  test('navigation links trigger router.push', () => {
    const { useRouter } = nextNavigation
    const mockedPush = jest.fn()
    useRouter.mockImplementation(() => ({ push: mockedPush }))

    render(<NavBar />)
    fireEvent.click(screen.getByText('Home'))
    expect(mockedPush).toHaveBeenCalledWith('/')
  })
})
