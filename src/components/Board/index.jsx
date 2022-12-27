import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";

const card = [
  {
    id: 0,
    title: "Card Title",
    description: "Card Description",
  },
  {
    id: 1,
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
    color: 'red',
  },
  {
    id: 2,
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description",
    color: 'yellow',
  },
  {
    id: 3,
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
    color: 'blue',
  },
  {
    id: 4,
    title: "Card Title",
    description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
    color: 'purple',
  }
]

export const ItemTypes = {
  CARD: 'card'
}

export default function Board() {
  const [cards, setCards] = useState(card);

  function addNewCard(title, description, color){
    const newCard = {
      title,
      description,
      color
    }

    const newCards = [...cards]
    newCards.push(newCard)
  
    setCards(newCards)
  }
  
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
          <InputCard addNewCard={addNewCard} />
          <List cards={cards} />
      </Container>
    </DndProvider>
  )
}
