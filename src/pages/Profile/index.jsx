import { Container, Header, Avatar, Form } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"

export function Profile() {
  return (
    <Container>
      <Header>
        <ButtonText title="Voltar" icon={FiArrowLeft} to="/" />
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/igorferreira007.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <br />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <br />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}