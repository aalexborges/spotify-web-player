import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Container, Content, List, ListItem, Logo, LogoLink } from './styles'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as Home } from '../../assets/svg/home.svg'
import { ReactComponent as HomeOutline } from '../../assets/svg/home-outline.svg'
import { ReactComponent as Library } from '../../assets/svg/library.svg'
import { ReactComponent as LibraryOutline } from '../../assets/svg/library-outline.svg'
import { ReactComponent as Plus } from '../../assets/svg/plus.svg'
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import { ReactComponent as SearchOutline } from '../../assets/svg/search-outline.svg'

const AsideNavigation = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <Content>
        <LogoLink to="/">
          <Logo />
        </LogoLink>

        <List>
          <ListItem selected={pathname === '/'}>
            <Link to="/">
              {pathname === '/' ? <Home /> : <HomeOutline />}
              <span>Início</span>
            </Link>
          </ListItem>

          <ListItem selected={pathname === '/search'}>
            <Link to="/search">
              {pathname === '/search' ? <Search /> : <SearchOutline />}
              <span>Buscar</span>
            </Link>
          </ListItem>

          <ListItem selected={pathname === '/collection'}>
            <Link to="/collection">
              {pathname === '/collection' ? <Library /> : <LibraryOutline />}
              <span>Sua Biblioteca</span>
            </Link>
          </ListItem>
        </List>

        <List mt>
          <ListItem>
            <Link to="/">
              <div>
                <Plus />
              </div>

              <span>Criar playlist</span>
            </Link>
          </ListItem>

          <ListItem liked selected={pathname === '/collection/tracks'}>
            <Link to="/collection/tracks">
              <div>
                <Heart />
              </div>

              <span>Músicas Curtidas</span>
            </Link>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default memo(AsideNavigation)
