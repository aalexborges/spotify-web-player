import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)<{ bg: string }>`
  grid-column: span 2;

  overflow: hidden;
  position: relative;

  border: 0px;
  border-radius: 8px;
  background-color: ${({ bg }) => bg};
`

export const Title = styled.h3`
  padding: 16px;
  max-width: 100%;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.3em;
  letter-spacing: -0.04em;

  top: 0px;
  left: 0px;
  position: absolute;

  user-select: none;
  overflow-wrap: break-word;
`

export const Image = styled.img`
  width: 128px;
  height: 128px;

  right: 0px;
  bottom: 0px;
  position: absolute;

  -webkit-transform: rotate(25deg) translate(18%, -2%);
  -moz-transform: rotate(25deg) translate(18%, -2%);
  -o-transform: rotate(25deg) translate(18%, -2%);
  transform: rotate(25deg) translate(18%, -2%);

  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
