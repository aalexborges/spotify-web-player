import {
  Container,
  Content,
  Image,
  Index,
  Item,
  LikedButton,
  MoreButton,
  Time,
} from './styles'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as More } from '../../assets/svg/more.svg'

interface PlaylistTableMusicProps {
  index: number
  name: string
  artist: string
  duration: string
  album: { name: string; src: string }
}

const PlaylistTableMusic = (props: PlaylistTableMusicProps) => {
  return (
    <Container>
      <Item justifySelf="end">
        <Index>
          <span>{props.index}</span>
        </Index>
      </Item>

      <Item>
        <Image
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src={props.album.src}
          alt=""
        />

        <Content>
          <div>{props.name}</div>
          <span>{props.artist}</span>
        </Content>
      </Item>

      <Item>
        <span>{props.album.name}</span>
      </Item>

      <Item noLink>
        <span>25 de jan. de 2022</span>
      </Item>

      <Item style={{ gridColumn: 'last' }} justifySelf="end" noLink>
        <LikedButton>
          <Heart />
        </LikedButton>

        <Time>{props.duration}</Time>

        <MoreButton>
          <More />
        </MoreButton>
      </Item>
    </Container>
  )
}

export default PlaylistTableMusic
