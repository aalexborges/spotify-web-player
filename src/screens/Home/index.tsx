import AlbumListItem from '../../components/AlbumListItem'
import ListTitle from '../../components/ListTitle'

import { Container, RowList, Section } from './styles'

import mixes from '../../data/mixes'
import recentlyPlayed from '../../data/recentlyPlayed'
import sadness from '../../data/sadness'
import you from '../../data/you'

const Home = () => {
  return (
    <Container>
      <Section>
        <ListTitle title="Tocado recentemente" />
        <RowList>
          {recentlyPlayed.map((data, index) => (
            <AlbumListItem {...data} key={index} />
          ))}
        </RowList>
      </Section>

      <Section>
        <ListTitle title="Seus mixes mais ouvidos" />
        <RowList>
          {mixes.map((data, index) => (
            <AlbumListItem {...data} key={index} />
          ))}
        </RowList>
      </Section>

      <Section>
        <ListTitle title="Tristeza" />
        <RowList>
          {sadness.map((data, index) => (
            <AlbumListItem {...data} key={index} />
          ))}
        </RowList>
      </Section>

      <Section>
        <ListTitle title="100% você" />
        <RowList>
          {you.map((data, index) => (
            <AlbumListItem {...data} key={index} />
          ))}
        </RowList>
      </Section>
    </Container>
  )
}

export default Home
