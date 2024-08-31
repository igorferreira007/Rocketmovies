import { Container } from "./styles"
import { useState } from "react"

export function Input({ icon: Icon, type = "text",  ...rest }) {
  function handleBlur(event) {
    if (type !== "number") {
      return
    }

    const value = Math.floor(event.target.value)

    if (value > 5) {
      event.target.value = 5
    } else if (value < 0) {
      event.target.value = 0
    }
  }

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type={type} {...rest} onBlur={handleBlur} />
    </Container>
  )
}
