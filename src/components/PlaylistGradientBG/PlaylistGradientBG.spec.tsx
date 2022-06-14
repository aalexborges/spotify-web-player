import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import PlaylistGradientBG from '.'

describe('PlaylistGradientBG', () => {
  it('should render', () => {
    const { rerender } = render(<PlaylistGradientBG />)

    let element = screen.getByTestId('playlist-gradient-bg')

    expect(element).toBeInTheDocument()
    expect(element.style.backgroundColor).toEqual('rgb(83, 83, 83)')

    // should render the element with a different background color if the likedSongs property is true
    rerender(<PlaylistGradientBG likedSongs />)

    element = screen.getByTestId('playlist-gradient-bg')

    expect(element).toBeInTheDocument()
    expect(element.style.backgroundColor).toEqual('rgb(80, 56, 160)')
  })
})
