import { Route, Routes } from 'react-router-dom'

import AsideNavigation from '../../components/AsideNavigation'
import MainBGGradient from '../../components/MainBGGradient'
import NavigationBar from '../../components/NavigationBar'

// Screens
import Collection from '../Collection'
import Home from '../Home'
import LikedSongs from '../LikedSongs'
import Search from '../Search'

import { Content, GridContainer, Main } from './styles'

const App = () => {
  return (
    <GridContainer>
      <AsideNavigation />

      <Main>
        <MainBGGradient />

        <Content>
          <NavigationBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/tracks" element={<LikedSongs />} />
          </Routes>
        </Content>
      </Main>
    </GridContainer>
  )
}

export default App
