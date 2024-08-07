import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
  padding: 1.4rem 3.2rem;
  border-radius: .8rem;
  font-weight: 500;

  > svg {
    font-size: 1.8rem;
  }

  &&.background-black {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`