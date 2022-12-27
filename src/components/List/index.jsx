import { Container } from "./style";
import Card from "../Card";

export default function List({cards}) {
  return (
    <Container>
      {[...cards].reverse().map((card) => (
        <Card key={card.id} data={card}/>
      ))}
    </Container>
  )
}
