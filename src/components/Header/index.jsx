import { Container, Profile } from "./styles"

import { Input } from "../Input"

import { Link } from "react-router-dom"

export function Header() {
  return (
    <Container>
      <div className="wrapper-header">
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <Link to="/profile">
              <strong>Igor Ferreira</strong>
            </Link>
            <span>Sair</span>
          </div>

          <Link to="/profile">
            <img
              src="https://github.com/igorferreira007.png"
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
