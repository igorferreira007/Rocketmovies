import { Container, Login, Background } from "./styles"
import { useState } from "react"
import { api } from "../../services/api"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <div className="wrapper-inputs">
          <Input 
            placeholder="Nome" 
            icon={FiUser} 
            type="text" 
            onChange={e => setName(e.target.value)}
          />

          <Input 
            placeholder="E-mail" 
            icon={FiMail} 
            type="email" 
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            placeholder="Senha" 
            icon={FiLock} 
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" onClick={handleSignUp} />
        <ButtonText title="Voltar para o login" icon={FiArrowLeft} to="/" />
      </Login>

      <Background />
    </Container>
  )
}