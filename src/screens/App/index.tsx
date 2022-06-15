import { useCallback, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'

import AsideNavigation from '../../components/AsideNavigation'
import MainBGGradient from '../../components/MainBGGradient'
import NavigationBar from '../../components/NavigationBar'
import PlayController from '../../components/PlayController'

// Screens
import Collection from '../Collection'
import Home from '../Home'
import LikedSongs from '../LikedSongs'
import Search from '../Search'

import { Content, GridContainer, Main, Scroll, ScrollThumb } from './styles'

const App = () => {
  const { pathname } = useLocation()

  const scrollRef = useRef<Scrollbars>(null)
  const navigationRef = useRef<HTMLElement>(null)
  const playlistHeaderRef = useRef<HTMLDivElement>(null)

  const onMainScroll = useCallback(
    (e: React.UIEvent<HTMLElement, UIEvent>) => {
      const navigation = navigationRef.current
      const playlistHeader = playlistHeaderRef.current
      const y = e.currentTarget.scrollTop

      if (navigation && pathname !== '/collection/tracks') {
        const opacity = y >= 100 ? 1 : y / 100

        navigation.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
        navigation.classList.remove('likedSongs')
      } else if (navigation) {
        navigation.style.backgroundColor = ''

        if (y >= 280) navigation.classList.add('likedSongs')
        else navigation.classList.remove('likedSongs')
      }

      if (y >= 379) playlistHeader?.classList.add('bg')
      else playlistHeader?.classList.remove('bg')
    },
    [pathname]
  )

  useEffect(() => {
    scrollRef.current?.scrollTop(0)
  }, [pathname])

  return (
    <GridContainer>
      <AsideNavigation />

      <Scrollbars
        ref={scrollRef}
        onScroll={onMainScroll}
        style={{ backgroundColor: '#121212' }}
        renderTrackVertical={props => <ScrollThumb {...props} />}
        renderThumbVertical={props => <Scroll {...props} />}>
        <Main>
          <MainBGGradient />

          <Content>
            <NavigationBar ref={navigationRef} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/collection" element={<Collection />} />
              <Route
                path="/collection/tracks"
                element={<LikedSongs ref={playlistHeaderRef} />}
              />
            </Routes>
          </Content>
        </Main>
      </Scrollbars>

      <PlayController />
    </GridContainer>
  )
}

export default App
