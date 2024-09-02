import { Container, Content, MyMovies, Notes } from "./styles"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { Title } from "../../components/Title"
import { FiPlus } from "react-icons/fi"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  function handleSearchChange(newValue) {
    setSearch(newValue)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChangeSearch={handleSearchChange} />
      <Content>
        <MyMovies>
          <Title title="Meus filmes" />
          <Button title="Adicionar filme" icon={FiPlus} to="/new" />
        </MyMovies>

        <Notes>
          {
            notes.map(note => (
              <Note
                key={note.id}
                data={note}
                to={`/details/${note.id}`}
              />
            ))
          }
        </Notes>
      </Content>
    </Container>
  )
}
