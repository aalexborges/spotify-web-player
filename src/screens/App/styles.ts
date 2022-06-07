import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 241px 1fr;
  grid-template-rows: 1fr auto;
`

export const Main = styled.main`
  position: relative;
  background-color: #121212;
`

export const Content = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
`
