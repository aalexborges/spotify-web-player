import '@testing-library/jest-dom'

import { render, screen } from '../../../tests/utils/testUtils'

import PlayController from '.'

describe('PlayController', () => {
  it('should render', () => {
    render(<PlayController />)

    expect(screen.getByText('Miracles')).toBeInTheDocument()
    expect(screen.getByText('Coldplay')).toBeInTheDocument()
    expect(screen.getAllByRole('switch').length).toEqual(3)
    expect(screen.getAllByRole('img').length).toEqual(11)
  })
})
