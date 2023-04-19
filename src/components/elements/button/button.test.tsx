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

    expect(screen.getByRole('button')).toHaveClass('bg-purple500')
  })

  test('applies outline styles when specified', () => {
    render(<Button variant="outline" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass('border-white')
  })
})
