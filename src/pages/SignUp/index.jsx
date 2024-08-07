import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

export function SignUp() {
  return (
    <Container>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <div className="wrapper-inputs">
          <Input placeholder="Nome" icon={FiUser} type="text" />
          <Input placeholder="E-mail" icon={FiMail} type="email" />
          <Input placeholder="Senha" icon={FiLock} type="password" />
        </div>

        <Button title="Cadastrar" />
        <ButtonText title="Voltar para o login" icon={FiArrowLeft} to="/" />
      </Login>

      <Background />
    </Container>
  )
}