import styled from 'styled-components'

export const Container = styled.div`
  z-index: 2;

  height: 36px;
  margin: 0px -16px 8px;
  padding: 0px 16px;

  top: 64px;
  position: sticky;

  border-bottom: 1px solid transparent;

  @media (min-width: 1024px) {
    margin: 0px -32px 16px;
    padding: 0px 32px;
  }

  &.bg {
    background: #181818;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    -webkit-box-shadow: 0 -1px 0 0 #181818;
    box-shadow: 0 -1px 0 0 #181818;

    & > div {
      border-bottom: 1px solid transparent;
    }
  }
`

export const Content = styled.div`
  height: 100%;
  padding: 0px 16px;

  gap: 16px;
  display: grid;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(
      120px,
      1fr
    );

  color: #b3b3b3;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

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

export const Item = styled.div<{ justifySelf?: 'start' | 'end' }>`
  display: flex;
  align-items: center;
  justify-self: ${({ justifySelf }) => justifySelf};

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;

  & span {
    display: -webkit-box;
    word-break: break-all;
    white-space: unset;

    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    @media (min-width: 768px) {
      font-size: 0.75rem;
      line-height: 1rem;
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
