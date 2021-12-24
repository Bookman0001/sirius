import { render, screen } from '@testing-library/react'

import Introduction from 'src/components/organisms/introduction'

describe('introduction', () => {
  it('should be rendered correctlly', () => {
    render(<Introduction />)
    expect(screen.getAllByText('My Blog')).toBeDefined()
  })
})
