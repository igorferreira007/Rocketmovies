import { Container, Content, Fieldset, Highlighters, NewMovie } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi"

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="back">
          <ButtonText title="Voltar" icon={FiArrowLeft} to="/" />
        </div>

        <NewMovie>
          <form>
            <Fieldset>
              <legend>
                <Title title="Novo filme" />
              </legend>

              <div className="col-2">
                <Input placeholder="Título" />
                <Input placeholder="Sua nota (de 0 a 5)" />
              </div>
              <Textarea placeholder="Observações" />

              <Highlighters>
                <h3>Marcadores</h3>

                <div className="wrapper-notesitem">
                  <NoteItem value="React" />
                  <NoteItem placeholder="Novo marcador" isNew />
                </div>
              </Highlighters>

              <div className="buttons">
                <Button
                  title="Excluir filme"
                  backgroundBlack="background-black"
                />
                <Button title="Salvar alterações" />
              </div>
            </Fieldset>
          </form>
        </NewMovie>
      </Content>
    </Container>
  )
}
