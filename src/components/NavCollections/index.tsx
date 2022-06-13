import { Container, Item, List } from './styles'

const NavCollections = () => {
  return (
    <Container data-testid="nav-collections">
      <List>
        <li>
          <Item to="/collection" selected>
            Playlists
          </Item>
        </li>

        <li>
          <Item to="/collection">Podcasts</Item>
        </li>

        <li>
          <Item to="/collection">Artistas</Item>
        </li>

        <li>
          <Item to="/collection">Álbuns</Item>
        </li>
      </List>
    </Container>
  )
}

export default NavCollections
