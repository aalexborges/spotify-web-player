import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1955px;
  padding: 24px 16px;

  @media (min-width: 1024px) {
    padding: 24px 32px;
  }
`

export const ActionButton = styled.button`
  width: 56px;
  height: 56px;
  margin-right: 32px;
  position: relative;

  color: #000;
  transition: background-color 33ms ease, transform 33ms ease;

  border: 0px;
  border-radius: 500px;
  background-color: #1ed760;

  & > svg {
    width: 28px;
    height: 28px;

    top: 14px;
    left: 14px;
    position: absolute;
  }

  &.active,
  &:hover,
  &:focus-visible {
    transform: scale(1.04);
    background-color: #1fdf64;
  }
`
