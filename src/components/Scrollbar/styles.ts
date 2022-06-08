import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ScrollbarContainer = styled.div`
  z-index: 3;

  width: 20px;
  height: 100%;
  padding: 2px;
  display: block;

  top: 0px;
  right: 0px;
  position: fixed;
`

export const ScrollTrack = styled.div`
  width: 20px;

  top: 0;
  bottom: 0px;
  position: absolute;
`

export const ScrollThumb = styled.div`
  width: 12px;
  min-height: 30px;
  margin-left: auto;

  position: relative;

  transition: background-color 0.2s linear;
  background-color: rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.active,
  &.active:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`
