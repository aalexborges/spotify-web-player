import '@testing-library/jest-dom'

import { act, render, screen } from '../../../tests/utils/testUtils'

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
      screen.getByText('Fake User').click()
    })

    expect(screen.getByText('Conta')).toBeInTheDocument()
    expect(screen.getByText('Perfil')).toBeInTheDocument()
    expect(screen.getByText('Sair')).toBeInTheDocument()
  })
})
