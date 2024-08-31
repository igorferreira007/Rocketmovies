import { Container, Profile } from "./styles"
import { useAuth } from "../../hooks/auth"
import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ onChangeSearch }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <div className="wrapper-header">
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título" onChange={e => onChangeSearch(e.target.value) } />

        <Profile>
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
            <a onClick={handleSignOut}>Sair</a>
          </div>

          <Link to="/profile">
            <img
              src={avatarUrl}
              alt={user.name}
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
