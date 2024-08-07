import { Container } from "./styles"

import { Tag } from "../Tag"
import { FiStar } from "react-icons/fi"
import { GoStarFill } from "react-icons/go"

export function Note({ data, ...rest }) {
  const numbers = Array.from({ length: 5 }, (_, i) => i + 1)
  
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div className="rating">
        {numbers.map((number, index) => (
          <span key={index}>
            {number <= data.rating ? <GoStarFill /> : <FiStar />}
          </span>
        ))}
      </div>
      <p>{data.description}</p>
      <footer>
        {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
      </footer>
    </Container>
  )
}
