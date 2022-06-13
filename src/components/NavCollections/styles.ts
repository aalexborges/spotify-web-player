import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.nav`
  height: 42px;
  padding-left: 24px;

  flex: 1;
  white-space: nowrap;
`

export const List = styled.ul`
  list-style: none;
  text-align: left;

  & > li {
    display: inline-block;
  }
`

export const Item = styled(Link)<{ selected?: boolean }>`
  padding: 13px 16px;
  margin-right: 8px;

  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;
  text-decoration: none;

  display: inline-block;
  position: relative;

  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? '#333' : 'transparent')};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
