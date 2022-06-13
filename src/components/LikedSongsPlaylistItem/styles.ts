import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  grid-column: span 2;

  width: 100%;
  padding: 20px;
  position: relative;

  gap: 20px;
  display: flex;
  flex-direction: column;

  transition: background-color 0.3s ease;

  border-radius: 6px;
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
`

export const Top = styled.div`
  flex: 1;
  margin-bottom: 12px;

  display: flex;
  align-items: flex-end;
`

export const TopContent = styled.div`
  width: 100%;
  max-height: 130px;

  display: -webkit-box;

  -webkit-line-clamp: 3;
  line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  color: #fff;
  font-size: 16px;
  line-height: 24px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > span {
    opacity: 0.7;

    &:first-of-type {
      display: none;
    }
  }
`

export const Bottom = styled.div`
  min-height: 62px;
`

export const Title = styled(Link)`
  z-index: 1;
  max-width: 100%;

  display: inline-block;
  position: relative;
  vertical-align: middle;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > div {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: -0.04em;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const Subtitle = styled.div`
  margin-top: 4px;

  display: -webkit-box;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: lowercase;
  letter-spacing: normal;

  -webkit-line-clamp: 2;
  line-clamp: 2;

  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`

export const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  z-index: 2;

  right: 20px;
  bottom: 20px;
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
