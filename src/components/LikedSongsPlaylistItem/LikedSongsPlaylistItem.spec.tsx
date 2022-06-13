import '@testing-library/jest-dom'

import { act, render, screen, fireEvent } from '../../../tests/utils/testUtils'

import LikedSongsPlaylistItem from '.'

describe('LikedSongsPlaylistItem', () => {
  it('should render', () => {
    render(<LikedSongsPlaylistItem />)

    expect(screen.getByText('Músicas Curtidas')).toBeInTheDocument()
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
    expect(screen.getByTestId('herocard-click-handler')).toBeInTheDocument()
  })

  describe('when clicked', () => {
    it('should lead to /collection/tracks route', () => {
      expect(window.location.pathname).toEqual('/')
      render(<LikedSongsPlaylistItem />)

      act(() => {
        fireEvent.click(screen.getByTestId('herocard-click-handler'))
      })
      expect(window.location.pathname).toEqual('/collection/tracks')
    })
  })

  it('should change style based on mouse events', () => {
    render(<LikedSongsPlaylistItem />)

    const clickHandler = screen.getByTestId('herocard-click-handler')
    const playButton = screen.getByTestId('play-button')

    expect(clickHandler).toBeInTheDocument()
    expect(playButton).toBeInTheDocument()
    expect(playButton.style.opacity).toEqual('')
    expect(playButton.style.transform).toEqual('')

    act(() => {
      fireEvent.mouseOver(clickHandler)
    })

    expect(playButton.style.opacity).toEqual('1')
    expect(playButton.style.transform).toEqual('translateY(0px)')

    act(() => {
      fireEvent.mouseLeave(clickHandler)
    })

    expect(playButton.style.opacity).toEqual('0')
    expect(playButton.style.transform).toEqual('translateY(8px)')
  })
})
