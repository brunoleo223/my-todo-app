import { Container } from "./style";
import Card from "../Card";

export default function List({card}) {
  return (
    <Container>
      {[...card].reverse().map((card, index) => (
        <Card key={index} data={card}/>
      ))}
    </Container>
  )
}
