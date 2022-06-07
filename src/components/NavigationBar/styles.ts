import styled from 'styled-components'

export const Container = styled.header`
  top: 0px;
  height: 64px;
  position: sticky;
  padding: 16px 32px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  white-space: nowrap;
`

export const NavigationButton = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s linear;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 0px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);

  svg {
    width: 22px;
    height: 22px;
    color: #ffffff;
  }
`

export const UserButton = styled.button<{ openDropdown?: boolean }>`
  height: 32px;
  padding: 2px;
  margin-left: 16px;

  gap: 8px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: capitalize;

  transition: background-color 0.2s linear, transform 0.2s linear;

  cursor: pointer;
  outline: none;
  white-space: nowrap;

  border: 0px;
  border-radius: 23px;
  background-color: ${({ openDropdown }) =>
    openDropdown ? '#282828' : 'rgba(0, 0, 0, 0.7)'};

  img {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 50%;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;

    transform: rotate(${({ openDropdown }) => (openDropdown ? 180 : 0)}deg);
  }

  &:hover,
  &:focus-visible {
    background-color: #282828;
  }
`

export const Dropdown = styled.div`
  z-index: 9999;

  width: 196px;
  padding: 4px;
  min-width: 196px;
  max-width: 350px;
  max-height: calc(100vh - 24px);

  top: 0px;
  right: 0px;
  position: absolute;
  transform: translate(-32px, 56px);

  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

  border-radius: 4px;
  background-color: #282828;
`

export const DropdownButton = styled.button`
  height: 40px;
  padding: 0px 8px 0px 12px;

  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1rem;
  text-align: start;

  gap: 8px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  transition: color 0.2s linear, background-color 0.2s linear;

  cursor: default;
  user-select: none;
  white-space: nowrap;

  border: 0px;
  border-radius: 2px;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`
