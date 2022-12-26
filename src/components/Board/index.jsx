import { useState } from "react";
import InputCard from "../InputCard";
import List from "../List";
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

export default function Board() {
  const [cards, setCards] = useState(card);

  function addNewCard(title, description){
    const newCard = {
      title,
      description
    }

    const newCards = [...cards]
    newCards.push(newCard)
  
    setCards(newCards)

    console.log(cards)
  }
  
  return (
    <Container>
        <InputCard addNewCard={addNewCard} />
        <List card={cards} />
    </Container>
  )
}
