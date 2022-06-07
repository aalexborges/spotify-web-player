import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import HomeListTitle from '.'

describe('HomeListTitle', () => {
  it('should render', () => {
    render(<HomeListTitle title="Titulo teste" />)

    expect(screen.getByText('Titulo teste')).toBeInTheDocument()
    expect(screen.getByText('Ver tudo')).toBeInTheDocument()
  })
})
