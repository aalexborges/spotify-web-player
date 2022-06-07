import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { ReactComponent as LogoSVG } from '../../assets/logo.svg'

export const Container = styled.aside`
  padding-top: 24px;
`

export const Content = styled.nav`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const LogoLink = styled(Link)`
  padding: 0px 24px 1px;
  margin-bottom: 18px;
`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: 40px;
  max-width: 131px;
`

export const List = styled.ul<{ mt?: boolean }>`
  padding: 0px 24px;
  margin-top: ${({ mt }) => (mt ? 24 : 0)}px;
  list-style: none;
`

export const ListItem = styled.li<{ selected?: boolean; liked?: boolean }>`
  height: 40px;

  color: ${({ selected }) => (selected ? '#ffffff' : '#b3b3b3')};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;

  user-select: none;

  &,
  & svg,
  & > a,
  & > a > div {
    transition: color 0.2s linear, fill 0.2s linear, opacity 0.2s linear;
  }

  & > a {
    height: 100%;

    gap: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;

    &:hover,
    &:focus-visible {
      color: #ffffff;

      & > div {
        opacity: 1;
      }
    }

    & > div {
      width: 24px;
      height: 24px;
      opacity: ${({ selected }) => (selected ? 1 : 0.7)};

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 2px;
      background: ${({ liked }) =>
        liked ? 'linear-gradient(135deg, #450af5, #c4efd9)' : '#fff'};

      color: ${({ liked }) => (liked ? '#fff' : '#000')};

      & > svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

// export const Divider = styled.hr`
//   height: 1px;
//   margin: 8px 24px 0px 24px;

//   border: none;
//   background-color: #282828;
// `
