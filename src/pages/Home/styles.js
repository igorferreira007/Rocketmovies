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
  max-width: 113.7rem;
  margin: 0 auto;
`

export const MyMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.8rem 0;
`

export const Notes = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  padding-right: .8rem;

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