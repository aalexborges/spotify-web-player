import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1955px;
  margin-top: -64px;
`

export const Content = styled.div`
  max-width: 1955px;
  padding: 0 16px 32px;

  @media (min-width: 1024px) {
    padding: 0 32px 32px;
  }
`

export const ContentContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  outline: 0;
`
