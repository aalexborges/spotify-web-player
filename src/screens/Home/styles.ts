import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1955px;

  gap: 24px;
  display: grid;
  padding: 24px 16px 32px;

  @media (min-width: 1024px) {
    padding: 24px 32px 32px;
  }
`

export const Section = styled.section`
  min-width: 100%;
  min-height: 300px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`

export const RowList = styled.div`
  max-width: 100%;
  overflow-y: hidden;

  gap: 24px;
  display: grid;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;

  grid-template-columns: repeat(2, minmax(0px, 1fr));

  & > div {
    display: none;
  }

  & > div:nth-child(-n + 2) {
    display: block;
  }

  @media (min-width: 773px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));

    & > div:nth-child(-n + 3) {
      display: block;
    }
  }

  @media (min-width: 973px) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));

    & > div:nth-child(-n + 4) {
      display: block;
    }
  }

  @media (min-width: 1301px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));

    & > div:nth-child(-n + 5) {
      display: block;
    }
  }

  @media (min-width: 1505px) {
    grid-template-columns: repeat(6, minmax(0px, 1fr));

    & > div:nth-child(-n + 6) {
      display: block;
    }
  }

  @media (min-width: 1709px) {
    grid-template-columns: repeat(7, minmax(0px, 1fr));

    & > div:nth-child(-n + 7) {
      display: block;
    }
  }

  @media (min-width: 1913px) {
    grid-template-columns: repeat(8, minmax(0px, 1fr));

    & > div {
      display: block;
    }
  }
`
