import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
  color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
  padding: 3.2rem;
  height: 22.2rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  > p {
    height: 4.5rem;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.TEXT_P_CARD};
  }

  .rating {
    display: flex;
    gap: .6rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > footer {
    display: flex;
    gap: .8rem;
  }
`