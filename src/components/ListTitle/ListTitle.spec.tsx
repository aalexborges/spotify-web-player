import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import ListTitle from '.'

describe('ListTitle', () => {
  it('should render', () => {
    render(<ListTitle title="Titulo teste" />)

    expect(screen.getByText('Titulo teste')).toBeInTheDocument()
    expect(screen.getByText('Ver tudo')).toBeInTheDocument()
  })

  it('should not render "Ver Tudo" link if noMore property is true', () => {
    render(<ListTitle title="Titulo teste" noMore />)

    expect(screen.getByText('Titulo teste')).toBeInTheDocument()
    expect(screen.queryByText('Ver tudo')).toBeNull()
  })
})
