import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Button from '.'

describe('Button', () => {
  test('renders button with the provided text', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  test('handles click events', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} label="Click me" />)

    await userEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies primary styles by default', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass('bg-blue-500')
  })

  test('applies secondary styles when specified', () => {
    render(<Button variant="secondary" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass('bg-gray-300')
  })

  test('allows custom classes', () => {
    render(<Button className="custom-class" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
