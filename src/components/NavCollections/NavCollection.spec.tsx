import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import NavCollections from '.'

describe('NavCollection', () => {
  it('should render', () => {
    render(<NavCollections />)

    expect(screen.getByText('Playlists')).toBeInTheDocument()
    expect(screen.getByText('Podcasts')).toBeInTheDocument()
    expect(screen.getByText('Artistas')).toBeInTheDocument()
    expect(screen.getByText('Álbuns')).toBeInTheDocument()
  })
})
