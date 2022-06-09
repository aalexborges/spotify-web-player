import styled from 'styled-components'

import { ReactComponent as Search } from '../../assets/svg/search-outline.svg'

export const Container = styled.div`
  flex: 0 1 364px;
  min-width: 192px;
  margin-right: auto;
`

export const Form = styled.form`
  flex: 1;
  height: 40px;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  overflow: hidden;
  border-radius: 500px;
  background-color: #ffffff;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 6px 48px;
  position: absolute;

  color: #000;
  font: 400 0.875rem/1rem 'Nunito', sans-serif;
  text-overflow: ellipsis;

  border: 0px;
  outline: none;
  border-radius: 500px;
  background-color: transparent;

  &:-ms-input-placeholder {
    color: #757575;
  }

  &::-moz-placeholder {
    color: #757575;
  }

  &::-webkit-input-placeholder,
  &::placeholder {
    color: #757575;
  }
`

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  margin: 0px 12px;

  color: #121212;
`

export const ClearButton = styled.button`
  z-index: 1;

  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 12px;

  color: #121212;

  border: 0px;
  outline: none;
  background-color: transparent;

  & > svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`
