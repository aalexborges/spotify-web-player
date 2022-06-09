import '@testing-library/jest-dom'

import { act, render, screen, fireEvent } from '../../../tests/utils/testUtils'

import SearchInput from '.'

describe('SearchInput', () => {
  it('should render', () => {
    render(<SearchInput />)

    const input = screen.getByPlaceholderText('Artistas, músicas ou podcasts')
    const searchIcon = screen.getByRole('img')

    expect(input).toBeInTheDocument()
    expect(searchIcon).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBe(1)
  })

  it('should change the input value and show a button to clear the value', () => {
    render(<SearchInput />)

    const input = screen.getByPlaceholderText('Artistas, músicas ou podcasts')
    let clearButton = screen.queryByRole('button')

    expect(input).toBeInTheDocument()
    expect(input.getAttribute('value')).toEqual('')
    expect(screen.getAllByRole('img').length).toBe(1)
    expect(clearButton).toBeNull()

    act(() => {
      fireEvent.change(input, { target: { value: 'This is a test' } })
    })

    clearButton = screen.getByRole('button')

    expect(input.getAttribute('value')).toEqual('This is a test')
    expect(screen.getAllByRole('img').length).toBe(2)
    expect(clearButton).toBeInTheDocument()

    // Clear input value
    act(() => {
      clearButton?.click()
    })

    expect(input.getAttribute('value')).toEqual('')
    expect(screen.getAllByRole('img').length).toBe(1)
  })
})
