import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1955px;

  padding: 16px 16px 32px;

  @media (min-width: 1024px) {
    padding: 16px 32px 32px;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.04em;

  margin-bottom: 16px;
`

export const Content = styled.div`
  gap: 24px;
  display: grid;
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

  @media (min-width: 1913px) {
    grid-template-columns: repeat(8, minmax(0px, 1fr));
  }
`
