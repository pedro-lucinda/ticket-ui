import { render, screen } from '@testing-library/react'
import React from 'react'
import { DescriptionItem } from '.'

describe('Description Item', () => {
  const mockProps = {
    content: 'Staples Center, Los Angeles, CA, US',
    label: 'Location',
  }

  const styles = {
    label: 'font-bold text-sm capitalize',
    content: 'font-medium text-sm',
  }

  test('renders the description item correctly', () => {
    render(<DescriptionItem {...mockProps} />)
    expect(screen.getByText(`${mockProps.label}:`)).toBeInTheDocument()
    expect(screen.getByText(mockProps.content)).toBeInTheDocument()
  })

  test('applies the correct styles', () => {
    render(<DescriptionItem {...mockProps} />)

    const labelElement = screen.getByText(`${mockProps.label}:`)
    const contentElement = screen.getByText(mockProps.content)

    expect(labelElement).toHaveClass(styles.label)
    expect(contentElement).toHaveClass(styles.content)
  })
})
