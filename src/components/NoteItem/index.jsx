import { Container } from "./styles"

import { FiX, FiPlus } from "react-icons/fi"

export function NoteItem({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button 
        type="button" 
        className={isNew ? "button-add" : "button-delete"} 
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}