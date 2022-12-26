import Card from "../Card";
import { Container } from "./style";

const card = [
  {
    title: "Card Title",
    description: "Card Description",
  },
  {
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
  },
  {
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description",
  },
  {
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
  },
  {
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
  }
]

export default function List() {
  return (
    <Container>
      <Card data={card[4]}/>
      <Card data={card[0]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
      <Card data={card[0]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
      <Card data={card[3]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
      <Card data={card[0]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
      <Card data={card[0]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
      <Card data={card[0]}/>
      <Card data={card[1]}/>
      <Card data={card[2]}/>
    </Container>
  )
}
