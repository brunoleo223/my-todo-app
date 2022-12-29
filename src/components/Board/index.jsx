import { useState } from "react";
import { loadInitialData } from "../../services/api";
import EditPanel from "../EditPanel";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";
import { v4 as uuid } from "uuid"

const loadCards = loadInitialData();

export const ItemTypes = {
  CARD: 'card'
}

export default function Board() {
  const getCardsFromLocalStorage = () => {
    const cards = localStorage.getItem('cards');
    if (cards) {
      return JSON.parse(cards);
    }
    return cards;
  }

  const [cards, setCards] = useState(getCardsFromLocalStorage() || loadCards);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openedCard, setOpenedCard] = useState({});

  function addNewCard(title, description, color){
    const newCard = {
      id: uuid(),
      title,
      description,
      color
    }

    const newCards = [...cards]
    newCards.push(newCard)
  
    localStorage.setItem('cards', JSON.stringify(newCards));
    setCards(newCards);
  }

  function editCard(card){
    const newCards = [...cards]
    const index = newCards.findIndex(c => c.id === card.id);
    newCards[index] = card;
    setCards(newCards);
  }

  function openPanel(cardId){
    console.log(cardId)
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
