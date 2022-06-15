import styled from 'styled-components'

export const GridContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-columns: 241px 1fr;
  grid-template-rows: 1fr auto;
`

export const Main = styled.section`
  background-color: #121212;
`

export const ScrollThumb = styled.div`
  z-index: 3;

  width: 20px !important;
  height: 100%;
  padding: 2px;

  right: 0px;
`

export const Scroll = styled.div`
  width: 12px !important;
  margin-left: auto;

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

export const Content = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
`
