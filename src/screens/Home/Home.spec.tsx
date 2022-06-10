import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import Home from '.'

import recentlyPlayed from '../../data/recentlyPlayed'
import mixes from '../../data/mixes'
import sadness from '../../data/sadness'
import you from '../../data/you'

describe('Home', () => {
  it('should render', () => {
    render(<Home />)

    expect(screen.getByText('Tocado recentemente')).toBeInTheDocument()
    expect(screen.getByText('Seus mixes mais ouvidos')).toBeInTheDocument()
    expect(screen.getByText('Tristeza')).toBeInTheDocument()
    expect(screen.getByText('100% você')).toBeInTheDocument()

    const dataLength = screen.getAllByTestId('card-click-handler').length
    expect(dataLength).toBe(
      recentlyPlayed.length + mixes.length + sadness.length + you.length
    )
  })
})
