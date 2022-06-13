import '@testing-library/jest-dom'

import { act, fireEvent, render, screen } from '../../../tests/utils/testUtils'

import NavigationBar from '.'

describe('NavigationBar', () => {
  it('should render', () => {
    render(<NavigationBar />)

    const userImg = screen.getByAltText('Fake User')

    expect(screen.getByLabelText('Voltar')).toBeInTheDocument()
    expect(screen.getByLabelText('Avançar')).toBeInTheDocument()
    expect(screen.getByText('Fake User')).toBeInTheDocument()

    expect(userImg).toBeInTheDocument()
    expect(userImg).toBeInstanceOf(HTMLImageElement)

    expect(screen.queryByText('Conta')).toBeNull()
    expect(screen.queryByText('Perfil')).toBeNull()
    expect(screen.queryByText('Sair')).toBeNull()
  })

  it('should open a dropdown when clicked on user button', () => {
    render(<NavigationBar />)

    expect(screen.queryByText('Conta')).toBeNull()
    expect(screen.queryByText('Perfil')).toBeNull()
    expect(screen.queryByText('Sair')).toBeNull()

    act(() => {
      fireEvent.click(screen.getByText('Fake User'))
    })

    expect(screen.getByText('Conta')).toBeInTheDocument()
    expect(screen.getByText('Perfil')).toBeInTheDocument()
    expect(screen.getByText('Sair')).toBeInTheDocument()
  })

  it('should close the dropdown if you click any other area', () => {
    render(<NavigationBar />)

    expect(screen.queryByText('Conta')).toBeNull()
    act(() => {
      fireEvent.click(screen.getByText('Fake User'))
    })
    expect(screen.getByText('Conta')).toBeInTheDocument()

    expect(screen.getByLabelText('Avançar')).toBeInTheDocument()
    act(() => {
      fireEvent.click(screen.getByLabelText('Avançar'))
    })
    expect(screen.queryByText('Conta')).toBeNull()
  })

  it('should show a search input when the page is /search', () => {
    render(<NavigationBar />)

    let input = screen.queryByPlaceholderText('Artistas, músicas ou podcasts')
    expect(input).toBeNull()

    window.history.pushState({}, 'Test page', '/search')
    render(<NavigationBar />)

    input = screen.getByPlaceholderText('Artistas, músicas ou podcasts')
    expect(input).toBeInTheDocument()
  })

  it('should show a collections navigation when the page is /collection', () => {
    render(<NavigationBar />)

    let navCollections = screen.queryByTestId('nav-collections')
    expect(navCollections).toBeNull()

    window.history.pushState({}, 'Collections', '/collection')
    render(<NavigationBar />)

    expect(window.location.pathname).toEqual('/collection')

    navCollections = screen.getByTestId('nav-collections')
    expect(navCollections).toBeInTheDocument()
  })
})
