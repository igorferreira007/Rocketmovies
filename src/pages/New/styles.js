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
`

export const Content = styled.main`
  grid-area: main;
  max-width: 113.7rem;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 8.5rem;

  .back {
    margin-top: 4rem;
  }
`

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .col-2 {
    display: flex;
    gap: 4rem;
    margin-top: 4rem;
  }

  .buttons {
    display: flex;
    gap: 4rem;

    a {
      width: 100%;
    }
  }
`

export const Highlighters = styled.div`
  
  > h3 {
    color: ${({ theme }) => theme.COLORS.TEXT_P_CARD};
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
  }

  .wrapper-notesitem {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    padding: 1.6rem;
    border-radius: .8rem;
  }
`

export const NewMovie = styled.div`
  overflow-y: auto;
  padding-right: .8rem;
  height: 90%;
  margin-top: 2.4rem;

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
`