import { useState } from "react";
import { loadInitialData } from "../../services/api";
import EditPanel from "../EditPanel";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";

const card = loadInitialData();

export const ItemTypes = {
  CARD: 'card'
}

export default function Board() {
  const [cards, setCards] = useState(card);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openedCard, setOpenedCard] = useState({});

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

  function editCard(card){
    const newCards = [...cards]
    const index = newCards.findIndex(c => c.id === card.id);
    newCards[index] = card;
    setCards(newCards);
  }

  function openPanel(cardId){
    const card = cards.find(card => card.id === cardId);
    setOpenedCard(card);
    setIsPanelOpen(true);
  }

  function closePanel(){
    setIsPanelOpen(false);
  }
  
  return (
    <Container>
        <InputCard addNewCard={addNewCard} />
        <List cards={cards} openPanel={openPanel} />
        <EditPanel 
          isPanelOpen={isPanelOpen} 
          openedCard={openedCard} 
          editCard={editCard} 
          closePanel={closePanel} 
        />
    </Container>
  )
}
