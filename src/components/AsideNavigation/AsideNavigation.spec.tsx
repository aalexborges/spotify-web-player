import '@testing-library/jest-dom'

import { act, render, screen } from '../../../tests/utils/testUtils'

import AsideNavigation from '.'

describe('AsideNavigation', () => {
  it('should render', () => {
    render(<AsideNavigation />)

    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Buscar')).toBeInTheDocument()
    expect(screen.getByText('Sua Biblioteca')).toBeInTheDocument()
    expect(screen.getByText('Criar playlist')).toBeInTheDocument()
    expect(screen.getByText('Músicas Curtidas')).toBeInTheDocument()
  })

  it('should change the pathname when clicking on a navigation link', () => {
    render(<AsideNavigation />)

    act(() => {
      screen.getByText('Buscar').click()
    })
    expect(window.location.pathname).toEqual('/search')

    act(() => {
      screen.getByText('Sua Biblioteca').click()
    })
    expect(window.location.pathname).toEqual('/collection')

    act(() => {
      screen.getByText('Músicas Curtidas').click()
    })
    expect(window.location.pathname).toEqual('/collection/tracks')
  })
})
