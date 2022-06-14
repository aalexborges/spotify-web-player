import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import PlaylistController from '.'

describe('PlaylistController', () => {
  it('PlaylistController', () => {
    render(<PlaylistController />)

    const button = screen.getByTestId('play-button')

    expect(button).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(button.getAttribute('aria-label')).toEqual('Tocar Músicas Curtidas')
  })
})
