import styled from 'styled-components'

import homeBGGradient from '../../assets/svg/home-bg-gradient.svg'

export const BGGradient = styled.div`
  top: 0px;
  width: 100%;
  height: 332px;
  position: absolute;
  margin-top: -64px;

  background-color: rgb(83, 83, 83);

  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(#121212)
    ),
    url(${homeBGGradient});

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6) 0%,
      rgba(18, 18, 18, 1) 100%
    ),
    url(${homeBGGradient});
`
