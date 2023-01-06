import React, { useContext, useState } from "react";
import EditPanel from "../EditPanel";
import InputCard from "../InputCard";
import List from "../List";
import { Container } from "./style";
import { CardsContext } from "../../Contexts/CardsContext";

export default function Board() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openedCard, setOpenedCard] = useState({});
  const {cards, editCard} = useContext(CardsContext)

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
        <InputCard />
        <List openPanel={openPanel} />
        <EditPanel 
          isPanelOpen={isPanelOpen} 
          openedCard={openedCard} 
          editCard={editCard} 
          closePanel={closePanel} 
        />
    </Container>
  )
}
