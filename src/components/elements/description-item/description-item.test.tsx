import { render } from '@testing-library/react'
import React from 'react'
import { DescriptionItem } from '.'

describe('Description Item', () => {
  it('renders the description item correctly', () => {
    const mockProps = {
      content: 'Staples Center, Los Angeles, CA, US',
      label: 'Location',
    }

    const { container } = render(<DescriptionItem {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
})
