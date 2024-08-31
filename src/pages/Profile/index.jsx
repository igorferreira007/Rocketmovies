import { Container, Header, Avatar, Form } from "./styles"
import { useState } from "react"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
      </Header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome" 
          type="text"
          icon={FiUser} 
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail" 
          type="email" 
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <Input 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input 
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setNewPassword(e.target.value)}
        />
        <br />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}