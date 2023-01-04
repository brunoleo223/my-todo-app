import { useContext, useState } from "react";
import EditPanel from "../EditPanel";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";
import { v4 as uuid } from "uuid"
import { CardsContext } from "../../Contexts/CardsContext";

export default function Board() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openedCard, setOpenedCard] = useState({});
  const {cards, setCards} = useContext(CardsContext)

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
