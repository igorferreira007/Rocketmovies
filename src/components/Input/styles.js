import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border-radius: 1rem;
  padding-inline: 2.4rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};

  > input {
    width: 100%;
    height: 5.6rem;
    font-size: 1.4rem;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};
    }
  }
`