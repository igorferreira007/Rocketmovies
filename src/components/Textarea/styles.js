import styled from "styled-components"

export const Container = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border: none;
  border-radius: 1rem;
  resize: none;
  width: 100%;
  height: 27.4rem;
  padding: 2.4rem;
  font-size: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};
  }
`