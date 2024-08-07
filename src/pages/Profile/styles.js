import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const Form = styled.form`
  width: 33.6rem;
  margin: -10.4rem auto;
  display: flex;
  gap: .8rem;
  flex-direction: column;
  align-items: center;

  > a {
    width: 100%;
  }
`

export const Header = styled.header`
  padding: 6.4rem 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
`

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  margin-bottom: 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    transition: filter 0.2s;

    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
    }

    input {
      display: none;
    }
  }
`
