import styled from 'styled-components'

import Scrollbar from '../../components/Scrollbar'

export const GridContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-columns: 241px 1fr;
  grid-template-rows: 1fr auto;
`

export const Main = styled(Scrollbar)`
  background-color: #121212;
`

export const Content = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
`
