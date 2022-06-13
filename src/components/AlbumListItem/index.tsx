import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Content,
  Image,
  ImageContainer,
  Mask,
  PlayButton,
  Text,
  Title,
} from './styles'

import { ReactComponent as Play } from '../../assets/svg/play.svg'

export interface AlbumListItemProps {
  to?: string
  src: string
  text: string
  title: string
}

const AlbumListItem = ({ text, title, to, src }: AlbumListItemProps) => {
  const navigate = useNavigate()

  const playRef = useRef<HTMLButtonElement>(null)

  const onMouseOver = () => {
    if (playRef.current) {
      playRef.current.style.opacity = '1'
      playRef.current.style.transform = 'translateY(0px)'
    }
  }

  const onMouseLeave = () => {
    if (playRef.current) {
      playRef.current.style.opacity = '0'
      playRef.current.style.transform = 'translateY(8px)'
    }
  }

  const onClick = () => navigate(to || '/')

  return (
    <Container>
      <ImageContainer>
        <Image
          aria-hidden="false"
          draggable="false"
          loading="lazy"
          src={src}
          alt=""
        />

        <PlayButton
          ref={playRef}
          data-testid="play-button"
          aria-label="Tocar Músicas Curtidas"
          type="button">
          <div>
            <Play />
          </div>
        </PlayButton>
      </ImageContainer>

      <Content>
        <Title to={to || '/'}>{title}</Title>
        <Text>{text}</Text>
      </Content>

      <Mask
        data-testid="card-click-handler"
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}></Mask>
    </Container>
  )
}

export default AlbumListItem
