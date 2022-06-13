import { Container, Content, Title } from './styles'

import LikedSongsPlaylistItem from '../../components/LikedSongsPlaylistItem'
import AlbumListItem from '../../components/AlbumListItem'

import recentlyPlayed from '../../data/recentlyPlayed'

const Collection = () => {
  return (
    <Container>
      <Title>Playlists</Title>

      <Content>
        <LikedSongsPlaylistItem />
        {recentlyPlayed
          .filter(({ to }) => !to)
          .map((data, index) => (
            <AlbumListItem {...data} key={index} />
          ))}
      </Content>
    </Container>
  )
}

export default Collection
