import Card from "../Card";
import { Container } from "./style";

export default function List() {
  const card = {
    title: "Card Title",
    description: "Card Description",
  }
  return (
    <Container>
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
      <Card data={card} />
    </Container>
  )
}
