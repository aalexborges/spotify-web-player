import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import PlaylistHeader from '.'

describe('PlaylistHeader', () => {
  it('should render', () => {
    render(
      <PlaylistHeader
        src=""
        title="Playlist Test"
        author={{ name: 'User Test', src: '' }}
        numberOfSongs={364}
      />
    )

    expect(screen.getByText('Playlist Test')).toBeInTheDocument()
    expect(screen.getByText('User Test')).toBeInTheDocument()
    expect(screen.getByText('364 músicas')).toBeInTheDocument()
  })

  it('should ')
})
