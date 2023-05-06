import { render, screen } from '@testing-library/react'
import React from 'react'
import { ISpinnerColor, ISpinnerSize, Spinner } from '.'

describe('Spinner component', () => {
  const renderSpinner = (size: ISpinnerSize, color: ISpinnerColor) => {
    render(<Spinner size={size} color={color} />)
    return screen.getByLabelText('Loading spinner')
  }

  test('renders a spinner with the default size and color', () => {
    const view = renderSpinner('sm', 'purple')
    expect(view).toHaveClass('w-4 h-4 fill-purple500')
    expect(view).toHaveAttribute('aria-label', 'Loading spinner')
  })

  test('renders a spinner with medium size and white color', () => {
    const view = renderSpinner('md', 'white')
    expect(view).toHaveClass('w-6 h-6 fill-white')
    expect(view).toHaveAttribute('aria-label', 'Loading spinner')
  })

  test('renders a spinner with large size and purple color', () => {
    const view = renderSpinner('lg', 'purple')
    expect(view).toHaveClass('w-8 h-8 fill-purple500')
    expect(view).toHaveAttribute('aria-label', 'Loading spinner')
  })
})
