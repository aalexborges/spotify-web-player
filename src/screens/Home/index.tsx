import HomeListTitle from '../../components/HomeListTitle'

import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <HomeListTitle title="Tocado recentemente" />

      <HomeListTitle title="Tristeza" />

      <HomeListTitle title="Programas para conhecer" />

      <HomeListTitle title="100% você" />

      <HomeListTitle title="Playlists anos 2010 do momento" />
    </Container>
  )
}

export default Home
