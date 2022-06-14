import styled from 'styled-components'

import bgGradient from '../../assets/svg/home-bg-gradient.svg'

export const Container = styled.div`
  height: 30vh;
  max-height: 500px;
  min-height: 340px;

  padding: 0px 32px 24px;

  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 1023px) {
    padding: 0px 16px 24px;
  }
`

export const Background = styled.div<{ likedSongs?: boolean }>`
  width: 100%;
  height: 100%;

  display: block;

  top: 0px;
  left: 0px;
  position: absolute;

  background-color: ${({ likedSongs }) =>
    likedSongs ? 'rgb(80, 56, 160)' : 'rgb(83, 83, 83)'};
`

export const GradientBackground = styled.div`
  width: 100%;
  height: 100%;

  display: block;

  top: 0px;
  left: 0px;
  position: absolute;

  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.5))
    ),
    url(${bgGradient});

  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
    url(${bgGradient});
`

export const Banner = styled.div`
  z-index: 0;

  width: 192px;
  height: 192px;
  min-width: 192px;
  margin-inline-end: 24px;

  align-self: flex-end;

  @media (min-width: 1280px) {
    width: 232px;
    height: 232px;
    min-width: 232px;
  }

  & > img {
    width: 100%;
    height: 100%;

    -o-object-fit: cover;
    object-fit: cover;

    -o-object-position: center center;
    object-position: center center;

    -webkit-box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
  }
`

export const Content = styled.div`
  -webkit-box-flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: end;

  z-index: 0;

  flex: 1;
  flex-flow: column;

  display: flex;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    align-content: space-between;
  }
`

export const Type = styled.h2`
  margin-top: 4px;

  display: flex;
  align-items: center;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
`

export const Title = styled.h1`
  width: 100%;
  padding: 0.08em 0px;
  visibility: visible;

  font-size: 6rem;
  font-weight: 900;
  line-height: 6rem;
  text-transform: none;
  letter-spacing: -0.06em;

  @media (max-width: 1236px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (max-width: 1056px) {
    font-size: 48px;
    line-height: 48px;
  }
`

export const InfoContainer = styled.div`
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;

  & > span {
    font-size: 0.8125rem;
    line-height: 1rem;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;

    &::before {
      content: '•';
      margin: 0px 4px;
    }
  }

  @media (min-width: 768px) {
    & > span {
      font-size: 0.875rem;
    }
  }
`

export const CreatedByContainer = styled.div`
  gap: 4px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  white-space: nowrap;

  & > img {
    width: 24px;
    height: 24px;
    display: inline-block;

    -o-object-fit: cover;
    object-fit: cover;

    -o-object-position: center center;
    object-position: center center;

    border-radius: 50%;
  }

  & > span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1rem;
    text-transform: none;
    letter-spacing: normal;

    cursor: pointer;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    & > span {
      font-size: 0.8125rem;
    }
  }
`
