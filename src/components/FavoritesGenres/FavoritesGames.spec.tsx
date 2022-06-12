import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import FavoritesGenres from '.'

describe('FavoritesGenres', () => {
  it('should render', () => {
    render(<FavoritesGenres src="" color="#B49BC8" title="Pop" />)

    const title = screen.getByText('Pop')
    const img = screen.getByRole('img')

    expect(title).toBeInTheDocument()
    expect(title).toBeInstanceOf(HTMLHeadingElement)

    expect(img).toBeInTheDocument()
    expect(img).toBeInstanceOf(HTMLImageElement)
    expect(img.getAttribute('src')).toEqual('')
  })
})
