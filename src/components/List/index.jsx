import { Container } from "./style";
import Card from "../Card";

export default function List({cards, openPanel}) {

  return (
    <Container>
      {[...cards].reverse().map((card) => (
        <Card key={card.id} data={card} openPanel={openPanel} />
      ))}
    </Container>
  )
}
