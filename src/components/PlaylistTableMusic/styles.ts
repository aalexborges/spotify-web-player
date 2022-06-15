import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;

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

export const ItemText = styled.span`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  display: -webkit-box;
  word-break: break-all;
  white-space: unset;

  overflow: hidden;
  text-overflow: ellipsis;

  color: #b3b3b3;
  font-size: 0.781rem;
  font-weight: 400;
  line-height: 1rem;
  text-transform: none;
  letter-spacing: normal;

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 0.813rem;
    line-height: 1rem;
  }

  &:hover,
  &:focus-visible {
    color: #fff;
    text-decoration: underline;
  }
`

export const Index = styled(Item)`
  justify-self: end;

  & > div {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;

    display: inline-block;
    position: relative;

    color: #b3b3b3;

    & > span {
      top: -4px;
      right: 0.25em;
      position: absolute;

      font-variant: tabular-nums;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-transform: none;
      letter-spacing: normal;

      @media (min-width: 768px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`

export const PlayButton = styled.button`
  width: 100%;
  height: 100%;

  color: #fff;
  opacity: 0;
  position: absolute;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  background-color: transparent;
`

export const TitleContainer = styled(Item)`
  & > div {
    padding-right: 8px;
    align-items: center;

    display: grid;
    column-gap: 8px;
    grid-template:
      'title title'
      'badges subtitle' / auto 1fr;

    & > div {
      grid-area: title;
      justify-self: start;

      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      display: -webkit-box;
      word-break: break-all;
      white-space: unset;

      overflow: hidden;
      text-overflow: ellipsis;

      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-transform: none;
      letter-spacing: normal;

      @media (min-width: 768px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`

export const AlbumImage = styled.img`
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

export const ArtistName = styled(ItemText)`
  grid-area: subtitle;
  grid-column-start: badges;

  font-weight: 500;
`

export const AlbumName = styled(ArtistName)`
  font-weight: 400;
`

export const AddedIn = styled(ItemText)`
  cursor: default;

  &:hover,
  &:focus-visible {
    color: #b3b3b3;
    text-decoration: none;
  }
`

export const TimeContainer = styled(Item)`
  grid-column: last;
  justify-self: end;
`

export const LikedButton = styled.button`
  margin-right: 16px;

  color: #1ed760;
  display: flex;

  border: 0px;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
  }
`

export const Duration = styled(AddedIn)`
  width: 5ch;
  margin-right: 16px;

  display: flex;
  justify-content: flex-end;
`

export const MoreButton = styled.button`
  color: #fff;
  opacity: 0;
  display: flex;

  border: 0px;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
  }
`

export const Container = styled.div`
  z-index: 1;
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
  background-color: transparent;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover,
  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.1);

    ${Index} {
      & span {
        opacity: 0;
      }
    }

    ${ArtistName} {
      color: #fff;
    }

    ${PlayButton}, ${MoreButton} {
      opacity: 1;
      pointer-events: auto;
    }
  }

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
