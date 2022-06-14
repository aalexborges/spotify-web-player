import { memo } from 'react'

import { ActionButton, Container } from './styles'

import { ReactComponent as Play } from '../../assets/svg/play.svg'

const PlaylistController = () => {
  return (
    <Container>
      <ActionButton
        data-testid="play-button"
        type="button"
        aria-label="Tocar Músicas Curtidas">
        <Play />
      </ActionButton>
    </Container>
  )
}

export default memo(PlaylistController)
