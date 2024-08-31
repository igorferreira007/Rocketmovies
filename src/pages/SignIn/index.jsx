import { Container, Login, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useAuth } from "../../hooks/auth"
import { FiMail, FiLock } from "react-icons/fi"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <div className="wrapper-inputs">
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

        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText title="Criar conta" to="/signup" />
      </Login>

      <Background />
    </Container>
  )
}