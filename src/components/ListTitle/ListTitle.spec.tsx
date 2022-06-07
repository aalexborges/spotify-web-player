import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import ListTitle from '.'

describe('ListTitle', () => {
  it('should render', () => {
    render(<ListTitle title="Titulo teste" />)

    expect(screen.getByText('Titulo teste')).toBeInTheDocument()
    expect(screen.getByText('Ver tudo')).toBeInTheDocument()
  })
})
