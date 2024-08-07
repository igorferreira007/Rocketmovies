import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  display: flex;
  gap: 1.6rem;
  height: 5.6rem;
  border-radius: 1rem;
  padding: 1.6rem;
  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.BACKGROUND_PLACEHOLDER}` : "none"};

  > input {
    background-color: transparent;
    border: none;
  }

  > button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }
`