import styled from 'styled-components'

import bgGradient from '../../assets/svg/home-bg-gradient.svg'

export const BG = styled.div<{ likedSong?: boolean }>`
  z-index: -1;

  width: 100%;
  height: 232px;
  position: absolute;

  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(#121212)
    ),
    url(${bgGradient});

  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%),
    url(${bgGradient});
`
