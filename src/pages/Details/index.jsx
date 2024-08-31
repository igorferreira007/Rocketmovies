import {
  Container,
  Content,
  WrapperTitle,
  NoteDetails,
  WrapperDetails,
  WrapperTags,
} from "./styles"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Title } from "../../components/Title"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi"
import { GoStarFill } from "react-icons/go"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Details() {
  const numbers = Array.from({ length: 5 }, (_, i) => i + 1)
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  function formatDateAndTime(dateTime) {
    const date = new Date(dateTime)

    const formattedDate = date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    
    const formattedTime = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    
    return `${formattedDate} às ${formattedTime}`
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />

            <div>
              <WrapperTitle>
                <Title title={data.title} />
                <div>
                  {numbers.map((number, index) => (
                    <span key={index}>
                      {number <= data.rating ? <GoStarFill /> : <FiStar />}
                    </span>
                  ))}
                </div>
              </WrapperTitle>

              <WrapperDetails>
                <NoteDetails>
                  <img src={avatarUrl} alt="" />
                  <span>{user.name}</span>
                </NoteDetails>

                <NoteDetails>
                  <FiClock />
                  <span>{formatDateAndTime(data.created_at)}</span>
                </NoteDetails>
              </WrapperDetails>

              {
                data.tags && 
                <WrapperTags>
                  {
                    data.tags.map(tag => (
                      <Tag key={String(tag.id)} title={tag.name} />
                    ))
                  }
                </WrapperTags>
              }

              <div className="wrapper-paragraph">
                <p>{data.description}</p>
              </div>
            </div>
            <Button
              title="Excluir filme"
              backgroundBlack="background-black"
              onClick={handleRemove}
            />
          </Content>
        </main>
      }
    </Container>
  )
}