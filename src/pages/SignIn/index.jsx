import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
  return (
    <Container>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div className="wrapper-inputs">
          <Input placeholder="E-mail" icon={FiMail} type="email" />
          <Input placeholder="Senha" icon={FiLock} type="password" />
        </div>

        <Button title="Entrar" />
        <ButtonText title="Criar conta" to="/signup" />
      </Login>

      <Background />
    </Container>
  )
}