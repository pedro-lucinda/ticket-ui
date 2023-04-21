/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Spinner } from '.'

describe('Spinner', () => {
  test('renders the component with the given size', () => {
    render(<Spinner size="md" />)
    const svg = screen.getByRole('status').firstChild
    expect(svg).toHaveClass('w-6 h-6')
  })

  test('renders the component with the given color', () => {
    render(<Spinner color="purple" />)
    const svg = screen.getByRole('status').firstChild
    expect(svg).toHaveClass('fill-purple500')
  })
})
