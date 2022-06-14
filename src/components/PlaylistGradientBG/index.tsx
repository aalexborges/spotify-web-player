import { memo } from 'react'

import { BG } from './styles'

const PlaylistGradientBG = (props: { likedSongs?: boolean }) => {
  return (
    <BG
      data-testid="playlist-gradient-bg"
      style={{
        backgroundColor: props.likedSongs
          ? 'rgb(80, 56, 160)'
          : 'rgb(83, 83, 83)',
      }}></BG>
  )
}

export default memo(PlaylistGradientBG)
