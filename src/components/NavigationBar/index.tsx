import { useState } from 'react'

import {
  ButtonsContainer,
  Container,
  Dropdown,
  DropdownButton,
  NavigationButton,
  UserButton,
} from './styles'

import userImg from '../../assets/svg/user.svg'

import { ReactComponent as Down } from '../../assets/svg/caret-down.svg'
import { ReactComponent as Left } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as Right } from '../../assets/svg/chevron-right.svg'
import { ReactComponent as NewTab } from '../../assets/svg/new-tab.svg'

const NavigationBar = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <Container>
      <ButtonsContainer>
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
      </ButtonsContainer>

      <UserButton
        type="button"
        aria-expanded="false"
        openDropdown={openDropdown}
        onClick={() => setOpenDropdown(!openDropdown)}>
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
}

export default NavigationBar
