import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { NavLink } from '.'

describe('NavLink', () => {
  test('renders the component with the given title', () => {
    render(<NavLink title="Home" onClick={() => console.log('hello')} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  test('triggers onClick event when clicked', () => {
    const handleClick = jest.fn()
    render(<NavLink title="Home" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Home'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
