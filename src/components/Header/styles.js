import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_HEADER};

  .wrapper-header {
    max-width: 1137px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;
    margin: 0 auto;

    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    strong {
      color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
      white-space: nowrap;
    }

    strong,
    span {
      font-size: 1.4rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_PLACEHOLDER};
    }
  }

  > a img {
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_HEADER};
    border-radius: 50%;
  }
`
