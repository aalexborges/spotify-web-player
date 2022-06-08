import CategoriesItem from '../../components/CategoriesItem'
import ListTitle from '../../components/ListTitle'
import categories from '../../data/categories'

import { AllContainer, Container } from './styles'

const Search = () => {
  return (
    <Container>
      <ListTitle title="Seus gêneros favoritos" noMore />

      <ListTitle title="Navegar por todas as seções" noMore />
      <AllContainer>
        {categories.map((category, index) => (
          <CategoriesItem key={index} {...category} />
        ))}
      </AllContainer>
    </Container>
  )
}

export default Search
