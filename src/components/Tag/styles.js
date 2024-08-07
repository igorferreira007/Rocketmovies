import styled from "styled-components"

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
  display: inline-block;
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.TEXT_TAG};
`