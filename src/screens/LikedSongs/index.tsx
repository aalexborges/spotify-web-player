import { forwardRef } from 'react'

import { Container, Content, ContentContainer } from './styles'

import PlaylistHeader from '../../components/PlaylistHeader'
import PlaylistController from '../../components/PlaylistController'
import PlaylistGradientBG from '../../components/PlaylistGradientBG'
import PlaylistTableHeader from '../../components/PlaylistTableHeader'
import PlaylistTableMusic from '../../components/PlaylistTableMusic'

import user from '../../assets/svg/user.svg'
import likedSongsImg from '../../assets/images/liked-songs.png'

import likedSongs from '../../data/likedSongs'

const LikedSongs = forwardRef<HTMLDivElement>(function LikedSongs(_, ref) {
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

      <Content>
        <ContentContainer>
          <PlaylistTableHeader ref={ref} />

          {likedSongs.map((data, index) => (
            <PlaylistTableMusic key={index} index={index + 1} {...data} />
          ))}
        </ContentContainer>
      </Content>
    </Container>
  )
})

export default LikedSongs
