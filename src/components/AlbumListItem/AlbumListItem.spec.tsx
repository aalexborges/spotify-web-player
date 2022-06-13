import '@testing-library/jest-dom'

import { act, render, screen, fireEvent } from '../../../tests/utils/testUtils'

import AlbumListItem from '.'

describe('AlbumListItem', () => {
  it('should render', () => {
    render(<AlbumListItem src="" title="Test" text="Text" />)

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
    expect(screen.getByTestId('card-click-handler')).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBe(2)
  })

  describe('when clicked', () => {
    it('should by default lead to the route /', () => {
      expect(window.location.pathname).toEqual('/')
      render(<AlbumListItem src="" title="Test" text="Text" />)

      act(() => screen.getByTestId('card-click-handler').click())
      expect(window.location.pathname).toEqual('/')
    })

    it('should lead to the route informed through the "to" property', () => {
      expect(window.location.pathname).toEqual('/')
      render(<AlbumListItem src="" title="Test" text="Text" to="/test" />)

      act(() => screen.getByText('Test').click())
      expect(window.location.pathname).toEqual('/test')
    })
  })

  it('should change style based on mouse events', () => {
    render(<AlbumListItem src="" title="Test" text="Text" />)

    const clickHandler = screen.getByTestId('card-click-handler')
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
