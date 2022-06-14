import styled from 'styled-components'

export const Container = styled.footer`
  z-index: 4;

  width: 100%;
  height: auto;
  min-width: 620px;

  -ms-grid-row: 2/3;
  grid-row: 2/3;

  -ms-grid-column: 1/3;
  grid-column: 1/3;

  display: flex;
  flex-direction: column;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border-top: 1px solid #282828;
  background-color: #181818;
`

export const Content = styled.div`
  height: 90px;
  padding: 0px 16px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Left = styled.div`
  width: 30%;
  min-width: 180px;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 56px;
  height: 56px;

  isolation: isolate;
  position: relative;

  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;

    -o-object-fit: cover;
    object-fit: cover;

    -o-object-position: center center;
    object-position: center center;

    -webkit-box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);

    background-color: #282828;
  }
`

export const InfoContainer = styled.div`
  margin: 0px 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & div {
    display: flex;
  }

  & span {
    color: #fff;
    font-size: 0.8125rem;
    line-height: 1rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: normal;
    text-decoration: none;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    cursor: pointer;

    @media (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1rem;
    }

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }

  & > div:last-of-type > span {
    margin-top: 1px;

    color: #b3b3b3;
    font-size: 0.6875rem;
    line-height: 1rem;

    @media (min-width: 768px) {
      font-size: 0.6875rem;
      line-height: 1rem;
    }
  }
`

export const LikedButton = styled.button`
  width: 32px;
  height: 32px;
  min-width: 32px;

  color: #1ed760;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
  }
`

export const Middle = styled.div`
  width: 40%;
  max-width: 722px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MiddleTop = styled.div`
  width: 100%;
  margin-bottom: 8px;

  gap: 16px;
  display: flex;
  flex-flow: row nowrap;

  & > div {
    flex: 1;

    gap: 8px;
    display: flex;

    &:first-of-type {
      justify-content: flex-end;
    }
  }
`

export const MiddleButton = styled.button`
  width: 32px;
  height: 32px;
  min-width: 32px;

  color: rgba(255, 255, 255, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    color: rgba(255, 255, 255, 1);
  }
`

export const PlayPauseButton = styled(MiddleButton)`
  color: #000;
  border-radius: 50%;
  background-color: #fff;

  -webkit-transition: transform 33ms cubic-bezier(0.3, 0, 0.7, 1);
  transition: transform 33ms cubic-bezier(0.3, 0, 0.7, 1);

  &:hover,
  &:focus-visible {
    color: #000;
    transform: scale(1.06);
  }
`

export const MiddleBottom = styled.div`
  width: 100%;

  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > span {
    min-width: 40px;

    color: #a7a7a7;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: normal;

    text-align: right;
    text-transform: none;

    &:last-of-type {
      text-align: left;
    }
  }

  & > div {
    flex: 1;
    height: 4px;

    display: flex;
    align-items: center;
    position: relative;

    border-radius: 2px;
    background-color: hsla(0, 0%, 100%, 0.3);

    & > div {
      width: 12px;
      height: 12px;
      display: none;

      left: 0px;
      position: absolute;
      transform: translateX(-25%);

      -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);

      border: 0px;
      border-radius: 50%;
      background-color: #fff;

      &:hover {
        display: block;
      }
    }

    &:hover {
      & > div {
        display: block;
      }
    }
  }
`

export const Right = styled.div`
  width: 30%;
  min-width: 180px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & button {
    width: 32px;
    height: 32px;
    min-width: 32px;

    color: rgba(255, 255, 255, 0.7);
    border: none;
    background-color: transparent;

    & > svg {
      width: 16px;
      height: 16px;
    }

    &:hover,
    &:focus-visible {
      color: rgba(255, 255, 255, 1);
    }
  }
`

export const VolumeBar = styled.div`
  flex: 0 1 125px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    flex: 1;
    height: 4px;
    position: relative;

    display: flex;
    align-items: center;

    border-radius: 2px;
    background-color: #fff;

    & > div {
      width: 12px;
      height: 12px;
      display: none;

      right: 0px;
      position: absolute;
      transform: translateX(50%);

      -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);

      border: 0px;
      border-radius: 50%;
      background-color: #fff;

      &:hover {
        display: block;
      }
    }

    &:hover {
      background-color: #1db954;

      & > div {
        display: block;
      }
    }
  }
`
