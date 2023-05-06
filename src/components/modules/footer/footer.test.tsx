import { render, screen } from '@testing-library/react'
import React from 'react'
import { Footer } from '.'

describe('footer', () => {
  test('should render footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  test('should render logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Ticket logo')).toBeInTheDocument()
  })
})
