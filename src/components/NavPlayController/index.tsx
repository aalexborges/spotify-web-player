import { Container, PlayButton, Title } from './styles'

import { ReactComponent as Play } from '../../assets/svg/play.svg'

const NavPlayController = () => {
  return (
    <Container id="nav-play-controller">
      <PlayButton type="button" aria-label="Tocar">
        <div>
          <Play />
        </div>
      </PlayButton>

      <Title>Músicas Curtidas</Title>
    </Container>
  )
}

export default NavPlayController
