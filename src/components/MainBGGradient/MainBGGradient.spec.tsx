import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import MainBGGradient from '.'

describe('MainBGGradient', () => {
  it('should render', () => {
    render(<MainBGGradient testId="bg" />)
    expect(screen.getByTestId('bg')).toBeInTheDocument()
  })

  it('should not render when path is different from /', () => {
    window.history.pushState({}, 'Test page', '/search')
    render(<MainBGGradient testId="bg" />)
    expect(screen.queryByTestId('bg')).toBeNull()
  })
})
