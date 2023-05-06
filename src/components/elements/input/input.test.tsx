import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Input } from '.'

describe('Input Component', () => {
  test('renders the input with the given label', () => {
    render(<Input label="Test label" id="test-input" />)

    const inputElement = screen.getByLabelText('Test label:')
    expect(inputElement).toBeInTheDocument()
  })

  test('calls onChange handler when the input value changes', () => {
    const onChange = jest.fn()

    render(<Input value="test" onChange={onChange} id="name" />)

    const inputElement = screen.getByDisplayValue('test')
    fireEvent.change(inputElement, { target: { value: 'test2' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('passes the correct value on change', () => {
    const handleChange = jest.fn()
    render(<Input label="Test label" id="test-input" onChange={handleChange} />)

    const inputElement = screen.getByLabelText('Test label:')
    const newValue = 'New value'
    fireEvent.change(inputElement, { target: { value: newValue } })

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: newValue,
        }),
      }),
    )
  })
})
