import { memo } from 'react'

import {
  Container,
  Content,
  ImageContainer,
  InfoContainer,
  Left,
  LikedButton,
  Middle,
  MiddleBottom,
  MiddleButton,
  MiddleTop,
  PlayPauseButton,
  Right,
  VolumeBar,
} from './styles'

import miracles from '../../assets/images/albums/miracles.jpg'

import { ReactComponent as Device } from '../../assets/svg/device.svg'
import { ReactComponent as Fullscreen } from '../../assets/svg/fullscreen.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as MaxVolume } from '../../assets/svg/max-volume.svg'
import { ReactComponent as Mic } from '../../assets/svg/mic.svg'
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as Queue } from '../../assets/svg/queue.svg'
import { ReactComponent as Random } from '../../assets/svg/random.svg'
import { ReactComponent as Repeat } from '../../assets/svg/repeat.svg'
import { ReactComponent as SkipBack } from '../../assets/svg/skip-back.svg'
import { ReactComponent as SkipForward } from '../../assets/svg/skip-forward.svg'

const PlayController = () => {
  return (
    <Container>
      <Content>
        <Left>
          <ImageContainer>
            <img
              aria-hidden="false"
              aria-label="Tocando agora: Miracles de Coldplay"
              draggable="false"
              loading="eager"
              src={miracles}
              alt=""
            />
          </ImageContainer>

          <InfoContainer>
            <div>
              <span>Miracles</span>
            </div>
            <div>
              <span>Coldplay</span>
            </div>
          </InfoContainer>

          <LikedButton role="switch" aria-label="Remover da Sua Biblioteca">
            <Heart />
          </LikedButton>
        </Left>

        <Middle>
          <MiddleTop>
            <div>
              <MiddleButton
                role="switch"
                aria-label="Ativar a ordem aleatória"
                aria-checked="false"
                data-testid="button-shuffle">
                <Random />
              </MiddleButton>

              <MiddleButton aria-label="Voltar" data-testid="skip-back">
                <SkipBack />
              </MiddleButton>
            </div>

            <PlayPauseButton aria-label="Play" data-testid="button-playpause">
              <Play />
            </PlayPauseButton>

            <div>
              <MiddleButton aria-label="Avançar" data-testid="skip-forward">
                <SkipForward />
              </MiddleButton>

              <MiddleButton
                role="switch"
                aria-label="Repetir"
                aria-checked="false"
                data-testid="button-repeat">
                <Repeat />
              </MiddleButton>
            </div>
          </MiddleTop>

          <MiddleBottom>
            <span>0:00</span>
            <div>
              <div></div>
            </div>
            <span>3:55</span>
          </MiddleBottom>
        </Middle>

        <Right>
          <button aria-label="Letra" data-testid="lyrics-button">
            <Mic />
          </button>

          <button aria-label="Fila" data-testid="queue-button">
            <Queue />
          </button>

          <button data-testid="device-button">
            <Device aria-label="Conectar a um dispositivo" />
          </button>

          <VolumeBar data-testid="volume-bar">
            <button aria-label="Mudo" data-testid="volume-button">
              <MaxVolume aria-label="Volume alto" />
            </button>

            <div>
              <div></div>
            </div>
          </VolumeBar>

          <button aria-label="Tela cheia" data-testid="fullscreen-button">
            <Fullscreen />
          </button>
        </Right>
      </Content>
    </Container>
  )
}

export default memo(PlayController)
