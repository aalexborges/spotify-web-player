import { forwardRef, memo } from 'react'

import { Container, Content, Item } from './styles'

import { ReactComponent as Time } from '../../assets/svg/time.svg'

const PlaylistTableHeader = forwardRef<HTMLDivElement>(
  function PlaylistTableHeader(_, ref) {
    return (
      <Container ref={ref}>
        <Content>
          <Item justifySelf="end">#</Item>

          <Item>
            <span>Título</span>
          </Item>

          <Item>
            <span>Álbum</span>
          </Item>

          <Item>
            <span>Adicionado em</span>
          </Item>

          <Item style={{ gridColumn: 'last' }} justifySelf="end">
            <Time />
          </Item>
        </Content>
      </Container>
    )
  }
)

export default memo(PlaylistTableHeader)
