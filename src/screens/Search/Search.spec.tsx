import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import Search from '.'

import categories from '../../data/categories'

describe('Search', () => {
  it('should render', () => {
    render(<Search />)

    expect(screen.getByText('Seus gêneros favoritos')).toBeInTheDocument()
    expect(screen.getByText('Navegar por todas as seções')).toBeInTheDocument()

    for (const { name } of categories) {
      if (name === 'Dance / Eletrônica') {
        expect(screen.getAllByText(name).length).toBe(2)
      } else expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
