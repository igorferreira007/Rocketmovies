import styled from "styled-components"

import backgroundImg from "../../assets/background-main.png"

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Login = styled.form`
  padding: 0 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -5rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    margin: 48px 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_P_SIGN};
  }

  > div.wrapper-inputs {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 2.4rem;
  }

  > a:last-child {
    align-self: center;
    margin-top: 4.2rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`