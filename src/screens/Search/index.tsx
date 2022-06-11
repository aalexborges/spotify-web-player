import CategoriesItem from '../../components/CategoriesItem'
import FavoritesGenres from '../../components/FavoritesGenres'
import ListTitle from '../../components/ListTitle'
import categories from '../../data/categories'

import { AllContainer, Container, Favorites } from './styles'

import dance from '../../assets/images/categories/dance.jpg'
import hipHop from '../../assets/images/categories/hip-hop.jpg'
import rock from '../../assets/images/categories/rock.jpg'
import pop from '../../assets/images/categories/pop.jpg'

const Search = () => {
  return (
    <Container>
      <ListTitle title="Seus gêneros favoritos" noMore />
      <Favorites>
        <FavoritesGenres src={pop} title="Pop" color="#8D67AB" />
        <FavoritesGenres src={rock} title="Rock" color="#E61E32" />
        <FavoritesGenres src={hipHop} title="Hip hop" color="#BA5D07" />
        <FavoritesGenres
          src={dance}
          title="Dance / Eletrônica"
          color="#DC148C"
        />
      </Favorites>

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
