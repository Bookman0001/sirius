/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Header from 'src/components/organisms/header'

describe('Header', () => {
  it('should be rendered correctlly in default', () => {
    render(<Header />)
    expect(screen.getAllByText('JA')).toBeDefined()
  })

  it('should be rendered correctlly in hideLangSwitch', () => {
    render(<Header hideLangSwitch />)
    expect(screen.queryByText('JA')).toBe(null)
  })
})
