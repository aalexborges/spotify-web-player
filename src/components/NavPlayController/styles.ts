import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-grow: 1;

  display: flex;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition: opacity 0.5s, visibility 0.5s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`

export const PlayButton = styled.button`
  width: 48px;
  height: 48px;

  transition-duration: 33ms;
  transition-property: background-color, box-shadow, transform;

  user-select: none;
  overflow: hidden;

  border: 0px;
  border-radius: 500px;
  background-color: transparent;

  & > div {
    width: 100%;
    height: 100%;

    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 500px;
    background-color: #1ed760;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus-visible {
    transform: scale(1.04);

    & > div {
      background-color: #1fdf64;
    }
  }
`

export const Title = styled.span`
  padding: 0 16px;

  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;

  overflow: hidden;
  text-overflow: ellipsis;
`
