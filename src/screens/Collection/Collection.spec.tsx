import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import Collection from '.'

import recentlyPlayed from '../../data/recentlyPlayed'

describe('Collection', () => {
  it('should render', () => {
    render(<Collection />)

    expect(screen.getByText('Playlists')).toBeInTheDocument()
    expect(screen.getByTestId('herocard-click-handler')).toBeInTheDocument()

    const dataLength = screen.getAllByTestId('card-click-handler').length
    expect(dataLength).toBe(recentlyPlayed.length - 1)
  })
})
