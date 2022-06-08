import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)<{ bg: string }>`
  overflow: hidden;
  position: relative;
  user-select: none;
  border-radius: 8px;
  background-color: ${({ bg }) => bg};

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Title = styled.h3`
  padding: 16px;
  max-width: 100%;

  top: 0px;
  left: 0px;
  position: absolute;

  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3em;
  letter-spacing: -0.04em;
  overflow-wrap: break-word;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;

  right: 0px;
  bottom: 0px;
  position: absolute;
  object-fit: cover;

  -webkit-transform: rotate(25deg) translate(18%, -2%);
  -moz-transform: rotate(25deg) translate(18%, -2%);
  transform: rotate(25deg) translate(18%, -2%);
`
