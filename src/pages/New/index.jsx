import { Container, Content, Fieldset, Highlighters, NewMovie } from "./styles"
import { useState } from "react"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o titulo da nota.")
    }
    if (newTag) {
      return alert("Você não adicionou a tag. Clique no botão de adicionar.")
    }
    if (!Number.isInteger(rating)) {
      return alert("Digite apenas números inteiros para a nota do filme.")
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="back">
          <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
        </div>

        <NewMovie>
          <form>
            <Fieldset>
              <legend>
                <Title title="Novo filme" />
              </legend>

              <div className="col-2">
                <Input 
                  placeholder="Título" 
                  onChange={e => setTitle(e.target.value)}
                />

                <Input 
                  placeholder="Sua nota (de 0 a 5)" 
                  type="number" 
                  step="1" 
                  min="0" 
                  max="5" 
                  onChange={e => setRating(Number(e.target.value))}
                />
              </div>

              <Textarea 
                placeholder="Observações" 
                onChange={e => setDescription(e.target.value)}
              />

              <Highlighters>
                <h3>Marcadores</h3>

                <div className="wrapper-notesitem">
                  {
                    tags.map((tag, index) => (
                      <NoteItem
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    ))
                  }
                  <NoteItem 
                    placeholder="Novo marcador" 
                    isNew 
                    value={newTag}
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
                </div>
              </Highlighters>

              <div className="buttons">
                <Button
                  title="Excluir filme"
                  backgroundBlack="background-black"
                />
                <Button title="Salvar alterações" onClick={handleNewNote} />
              </div>
            </Fieldset>
          </form>
        </NewMovie>
      </Content>
    </Container>
  )
}
