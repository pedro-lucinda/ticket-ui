import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from '.'

describe('Button', () => {
  const colorClasses = {
    default: 'px-4 py-2 rounded-md',
    outline: 'border-white',
  }

  const sizes = {
    sm: ' max-w-[120px] h-[40px] text-sm',
    md: 'max-w-[200px] h-[60px] text-md',
    lg: 'max-w-lg h-[60px] text-md',
  }

  test('renders button with the provided text', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  test('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} label="Click me" />)

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies primary styles by default', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass(colorClasses.default)
  })

  test('applies outline styles when specified', () => {
    render(<Button variant="outline" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass(colorClasses.outline)
  })

  test('applies default size style', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass(sizes.md)
  })

  test('applies small size style', () => {
    render(<Button size="sm" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass(sizes.sm)
  })

  test('renders a spinner when isLoading is true', () => {
    render(<Button isLoading={true} label="Click me" />)

    expect(screen.getByRole('spinner')).toBeInTheDocument()
  })

  test('does not render a spinner when isLoading is false', () => {
    render(<Button isLoading={false} label="Click me" />)

    expect(screen.queryByRole('spinner')).not.toBeInTheDocument()
  })

  test('applies custom className', () => {
    render(<Button className="custom-class" label="Click me" />)

    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
