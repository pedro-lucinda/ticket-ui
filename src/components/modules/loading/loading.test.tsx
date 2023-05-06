import { render, screen } from '@testing-library/react'
import React from 'react'
import { LoadingComponent } from '.'

describe('loading component', () => {
  const textSizes = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  }
  const textColors = {
    purple: 'text-purple-500',
  }

  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }
  const spinnerColors = {
    purple: 'fill-purple500',
  }

  test('should render the title', () => {
    render(<LoadingComponent title="loading" />)
    expect(screen.getByText('loading')).toBeInTheDocument()
  })

  test('should render the spinner', () => {
    render(<LoadingComponent />)
    expect(screen.getByRole('spinner')).toBeInTheDocument()
  })

  test('should render the spinner with the color purple', () => {
    render(<LoadingComponent title="loading" color="purple" />)
    expect(screen.getByText('loading')).toHaveClass(textColors.purple)
    expect(screen.getByLabelText('Loading spinner')).toHaveClass(
      spinnerColors.purple,
    )
  })

  test('should render the spinner with the size sm', () => {
    render(<LoadingComponent title="loading" size="sm" />)
    expect(screen.getByText('loading')).toHaveClass(textSizes.sm)
    expect(screen.getByLabelText('Loading spinner')).toHaveClass(
      spinnerSizes.sm,
    )
  })
})
