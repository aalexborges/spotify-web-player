import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: -0.04em;
  }

  & > a {
    margin-left: 8px;

    color: #b3b3b3;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.1em;

    white-space: nowrap;
    text-transform: uppercase;
  }

  a {
    outline: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`
