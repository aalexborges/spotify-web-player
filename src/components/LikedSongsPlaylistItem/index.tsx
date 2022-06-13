import { Fragment, useRef } from 'react'

import {
  Bottom,
  Container,
  Mask,
  PlayButton,
  Subtitle,
  Title,
  Top,
  TopContent,
} from './styles'

import likedSongs from '../../data/likedSongs'

import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { useNavigate } from 'react-router-dom'

const LikedSongsPlaylistItem = () => {
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

  const onClick = () => navigate('/collection/tracks')

  return (
    <Container>
      <Top>
        <TopContent>
          {likedSongs.map((data, index) => (
            <Fragment key={index}>
              <span> &bull; </span>
              {data.artist}
              <span> {data.name}</span>
            </Fragment>
          ))}
        </TopContent>
      </Top>

      <Bottom>
        <Title to="/collection/tracks">
          <div>Músicas Curtidas</div>
        </Title>
        <Subtitle>{likedSongs.length} músicas curtidas</Subtitle>
      </Bottom>

      <PlayButton
        ref={playRef}
        data-testid="play-button"
        aria-label="Tocar Músicas Curtidas"
        type="button">
        <div>
          <Play />
        </div>
      </PlayButton>

      <Mask
        data-testid="herocard-click-handler"
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}></Mask>
    </Container>
  )
}

export default LikedSongsPlaylistItem
