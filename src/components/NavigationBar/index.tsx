import { forwardRef, memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  Container,
  Dropdown,
  DropdownButton,
  LeftContainer,
  NavigationButton,
  UserButton,
} from './styles'

import userImg from '../../assets/svg/user.svg'

import { ReactComponent as Down } from '../../assets/svg/caret-down.svg'
import { ReactComponent as Left } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as Right } from '../../assets/svg/chevron-right.svg'
import { ReactComponent as NewTab } from '../../assets/svg/new-tab.svg'

import SearchInput from '../SearchInput'
import NavCollections from '../NavCollections'
import NavPlayController from '../NavPlayController'

type MEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const NavigationBar = forwardRef<HTMLElement>(function NavigationBar(_, ref) {
  const { pathname } = useLocation()

  const [openDropdown, setOpenDropdown] = useState(false)

  const toggleDropdown = (event: MEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setOpenDropdown(!openDropdown)
  }

  useEffect(() => {
    function onClick() {
      if (openDropdown) setOpenDropdown(false)
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [openDropdown])

  return (
    <Container ref={ref}>
      <LeftContainer>
        <NavigationButton type="button" aria-hidden aria-label="Voltar">
          <Left />
        </NavigationButton>

        <NavigationButton
          type="button"
          aria-hidden
          aria-label="Avançar"
          disabled>
          <Right />
        </NavigationButton>
      </LeftContainer>

      {pathname === '/search' && <SearchInput />}
      {pathname === '/collection' && <NavCollections />}
      {pathname === '/collection/tracks' && <NavPlayController />}

      <UserButton
        type="button"
        aria-expanded="false"
        openDropdown={openDropdown}
        onClick={toggleDropdown}>
        <img
          src={userImg}
          aria-hidden="false"
          draggable="false"
          loading="eager"
          alt="Fake User"
        />
        <span>Fake User</span>
        <Down />
      </UserButton>

      {openDropdown && (
        <Dropdown>
          <DropdownButton type="button">
            Conta <NewTab />
          </DropdownButton>
          <DropdownButton type="button">Perfil</DropdownButton>
          <DropdownButton type="button">Sair</DropdownButton>
        </Dropdown>
      )}
    </Container>
  )
})

export default memo(NavigationBar)
