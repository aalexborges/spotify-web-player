import {
  AddedIn,
  AlbumImage,
  AlbumName,
  ArtistName,
  Container,
  Duration,
  Index,
  Item,
  LikedButton,
  MoreButton,
  PlayButton,
  TimeContainer,
  TitleContainer,
} from './styles'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as More } from '../../assets/svg/more.svg'
import { ReactComponent as Play } from '../../assets/svg/play.svg'

interface PlaylistTableMusicProps {
  index: number
  name: string
  artist: string
  duration: string
  album: { name: string; src: string }
}

const PlaylistTableMusic = (props: PlaylistTableMusicProps) => {
  return (
    <Container role="row" draggable="true">
      <Index>
        <div>
          <span>{props.index}</span>

          <PlayButton
            type="button"
            aria-label={`Tocar ${props.name} de ${props.artist}`}
            aria-expanded="false">
            <Play />
          </PlayButton>
        </div>
      </Index>

      <TitleContainer>
        <AlbumImage
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src={props.album.src}
          alt=""
        />

        <div>
          <div>{props.name}</div>
          <ArtistName>{props.artist}</ArtistName>
        </div>
      </TitleContainer>

      <Item>
        <AlbumName>{props.album.name}</AlbumName>
      </Item>

      <Item>
        <AddedIn>25 de jan. de 2022</AddedIn>
      </Item>

      <TimeContainer>
        <LikedButton
          type="button"
          role="switch"
          aria-label="Remover da Sua Biblioteca"
          aria-checked="true"
          aria-expanded="false">
          <Heart />
        </LikedButton>

        <Duration>{props.duration}</Duration>

        <MoreButton
          type="button"
          aria-label={`Mais opções para ${props.name} de ${props.artist}`}
          aria-haspopup="menu"
          aria-expanded="false">
          <More />
        </MoreButton>
      </TimeContainer>
    </Container>
  )
}

export default PlaylistTableMusic
