import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1955px;

  gap: 16px;
  display: grid;
  padding: 16px 16px 40px;

  @media (min-width: 1024px) {
    padding: 16px 32px 48px;
  }
`

export const Favorites = styled.section`
  overflow: hidden;

  gap: 24px;
  display: grid;
  grid-auto-rows: 0;
  grid-template-rows: 220px;
  grid-template-columns: repeat(8, 180px);
`

export const AllContainer = styled.section`
  overflow-y: hidden;

  gap: 24px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, minmax(0px, 1fr));

  @media (min-width: 773px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }

  @media (min-width: 973px) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }

  @media (min-width: 1301px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }

  @media (min-width: 1505px) {
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }

  @media (min-width: 1709px) {
    grid-template-columns: repeat(7, minmax(0px, 1fr));
  }
`
