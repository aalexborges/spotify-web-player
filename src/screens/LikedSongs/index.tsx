import { Container } from './styles'

import PlaylistHeader from '../../components/PlaylistHeader'
import PlaylistController from '../../components/PlaylistController'
import PlaylistGradientBG from '../../components/PlaylistGradientBG'

import user from '../../assets/svg/user.svg'
import likedSongsImg from '../../assets/images/liked-songs.png'

import likedSongs from '../../data/likedSongs'

const LikedSongs = () => {
  return (
    <Container>
      <PlaylistHeader
        src={likedSongsImg}
        title="Músicas Curtidas"
        author={{ name: 'Fake User', src: user }}
        likedSongs
        numberOfSongs={likedSongs.length}
      />

      <PlaylistGradientBG likedSongs />
      <PlaylistController />
    </Container>
  )
}

export default LikedSongs
