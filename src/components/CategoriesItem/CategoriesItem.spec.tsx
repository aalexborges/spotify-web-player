import '@testing-library/jest-dom'
import CategoriesItem from '.'

import { render, screen } from '../../../tests/utils/testUtils'

import brasil from '../../assets/images/categories/Brasil.jpeg'

describe('CategoriesItem', () => {
  it('should render', () => {
    render(<CategoriesItem src={brasil} color="#B49BC8" name="Brasil" />)

    const title = screen.getByText('Brasil')
    const img = screen.getByRole('img')

    expect(title).toBeInTheDocument()
    expect(title).toBeInstanceOf(HTMLHeadingElement)

    expect(img).toBeInTheDocument()
    expect(img).toBeInstanceOf(HTMLImageElement)
  })
})
