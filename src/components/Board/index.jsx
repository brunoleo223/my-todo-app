import { useState } from "react";
import { loadInitialData } from "../../services/api";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";

const card = loadInitialData();

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
    <Container>
        <InputCard addNewCard={addNewCard} />
        <List cards={cards} />
    </Container>
  )
}
