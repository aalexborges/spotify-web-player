import styled from 'styled-components'

import { ReactComponent as LogoSvg } from '../../assets/logo.svg'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #000;
`

export const Logo = styled(LogoSvg)`
  width: 100%;
  max-width: 160px;
  margin-bottom: 32px;
`

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`
