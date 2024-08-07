import { Container } from "./styles"

export function Button({ title, icon: Icon, backgroundBlack, ...rest }) {
  return (
    <Container type="button" {...rest} className={backgroundBlack}>
      {Icon && <Icon /> }
      {title}
    </Container>
  )
}