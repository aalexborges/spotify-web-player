import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  position: relative;

  transition: background-color 0.3s ease;
  border-radius: 6.075px;
  background-color: #181818;
`

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 100%;

  overflow: hidden;
  position: relative;

  -webkit-box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  -moz-box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

  border-radius: 6.075px;
  background-color: #333;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;

  top: 0px;
  left: 0px;
  position: absolute;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  z-index: 2;

  right: 8px;
  bottom: 8px;
  position: absolute;

  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s ease;

  -webkit-box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  -moz-box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);

  color: #000000;

  border: 0px;
  border-radius: 500px;
  background-color: transparent;

  &:hover,
  &:focus-visible {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  & > div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s ease, transform 0.3s ease;

    border-radius: 500px;
    background-color: #1ed760;

    & > svg {
      width: 24px;
      height: 24px;
    }

    &:hover,
    &:focus-visible {
      transform: scale(1.04);
      background-color: #1fdf64;
    }
  }
`

export const Content = styled.div`
  min-height: 62px;
`

export const Title = styled(Link)`
  display: block;
  max-width: 100%;
  padding-block-end: 4px;

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Text = styled.div`
  margin-top: 4px;

  display: -webkit-box;
  max-width: 100%;

  color: #a7a7a7;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-line-clamp: 2;
  line-clamp: 2;

  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`

export const Mask = styled.div`
  width: 100%;
  height: 100%;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;

  cursor: pointer;
`
