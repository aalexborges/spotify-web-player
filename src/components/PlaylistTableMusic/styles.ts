import styled from 'styled-components'

export const Container = styled.div`
  height: 56px;
  padding: 0px 16px;

  gap: 16px;
  display: grid;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(
      120px,
      1fr
    );

  border: 1px solid transparent;
  border-radius: 4px;

  @media (max-width: 999px) {
    grid-template-columns: [index] 16px [first] 4fr [var1] 2fr [last] minmax(
        120px,
        1fr
      );
  }

  @media (max-width: 776px) {
    grid-template-columns: [index] 16px [first] 4fr [last] minmax(120px, 1fr);
  }
`

interface IItem {
  justifySelf?: 'start' | 'end'
  noLink?: boolean
}

export const Item = styled.div<IItem>`
  z-index: 1;

  display: flex;
  align-items: center;
  justify-self: ${({ justifySelf }) => justifySelf};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;

  & span {
    display: -webkit-box;
    word-break: break-all;
    white-space: unset;

    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    color: #b3b3b3;
    font-size: 0.688rem;
    font-weight: 400;
    line-height: 1rem;
    text-transform: none;
    letter-spacing: 0.1em;

    cursor: ${({ noLink }) => (noLink ? 'default' : 'pointer')};

    @media (min-width: 768px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    &:hover {
      ${({ noLink }) => (noLink ? 'color: #b3b3b3 !important' : '')};
      text-decoration: ${({ noLink }) => (noLink ? 'none' : 'underline')};
    }
  }

  & svg {
    width: 16px;
    height: 16px;
  }

  &:last-of-type svg {
    margin-right: 32px;
  }

  @media (max-width: 999px) {
    &:nth-of-type(4) {
      display: none;
    }
  }

  @media (max-width: 776px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`

export const Index = styled.div`
  width: 16px;
  height: 16px;
  min-height: 16px;
  min-width: 16px;

  color: #b3b3b3;
  display: inline-block;
  position: relative;

  & > span {
    top: -4px;
    right: 0.25em;
    position: absolute;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  -o-object-fit: cover;
  object-fit: cover;

  -o-object-position: center center;
  object-position: center center;

  flex-shrink: 0;
  background-color: #282828;
`

export const Content = styled.div`
  padding-right: 8px;

  display: grid;
  column-gap: 8px;
  align-items: center;
  grid-template:
    'title title'
    'badges subtitle' / auto 1fr;

  & > div:first-of-type {
    grid-area: title;
    justify-self: start;

    display: -webkit-box;
    white-space: unset;
    word-break: break-all;

    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    text-transform: none;
    letter-spacing: normal;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  & > span {
    grid-area: subtitle;
    grid-column-start: badges;

    display: -webkit-box;
    white-space: unset;
    word-break: break-all;

    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    color: #b3b3b3;
    font-size: 0.688rem;
    line-height: 1rem;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;

    cursor: pointer;

    @media (min-width: 768px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LikedButton = styled.button`
  margin-right: 16px;
  color: #1ed760;

  border: 0px;
  background-color: transparent;

  &,
  & svg {
    width: 16px;
    height: 16px;
  }
`

export const Time = styled.div`
  width: 5ch;
  margin-right: 16px;

  display: flex;
  justify-content: flex-end;

  color: #a7a7a7;
  font-size: 0.688rem;
  line-height: 1rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;

  @media (min-width: 768px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

export const MoreButton = styled.button`
  opacity: 0px;

  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  background-color: transparent;

  &,
  & svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`
