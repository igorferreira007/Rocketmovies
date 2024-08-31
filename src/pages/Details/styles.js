import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "main";

  > header {
    grid-area: header;
  }

  > main {
    grid-area: main;
    padding: 4rem;
    overflow: hidden;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 113.7rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  > div {
    height: 100%;
    overflow-y: auto;
    margin-top: 2.4rem;
    padding-right: 1.6rem;
    padding-bottom: 3.2rem;

    .wrapper-paragraph {
      margin-top: 4rem;
      text-align: justify;
    }

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 1rem !important;
      color: pink;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 20px;
    }
  }

`

export const WrapperTitle = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const NoteDetails = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const WrapperDetails = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 2.4rem;
`

export const WrapperTags = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 4rem;

  > span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
  }
`
