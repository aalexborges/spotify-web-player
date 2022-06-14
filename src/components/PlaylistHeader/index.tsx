import { memo } from 'react'

import {
  Background,
  Banner,
  Container,
  Content,
  CreatedByContainer,
  GradientBackground,
  InfoContainer,
  Title,
  Type,
} from './styles'

interface PlaylistHeaderProps {
  src: string
  title: string
  likedSongs?: boolean
  numberOfSongs: number
  author: { name: string; src: string }
}

const PlaylistHeader = (props: PlaylistHeaderProps) => {
  return (
    <Container>
      <Background likedSongs={props.likedSongs}></Background>
      <GradientBackground></GradientBackground>

      <Banner>
        <img
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src={props.src}
          alt={props.title}
        />
      </Banner>

      <Content>
        <Type>PLAYLIST</Type>
        <Title>{props.title}</Title>

        <InfoContainer>
          <CreatedByContainer>
            <img
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src={props.author.src}
              alt={props.author.name}
            />

            <span>{props.author.name}</span>
          </CreatedByContainer>

          <span>{props.numberOfSongs} músicas</span>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default memo(PlaylistHeader)
