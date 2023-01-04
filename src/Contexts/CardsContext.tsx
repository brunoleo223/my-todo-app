import React, { createContext, useEffect, useState } from "react"

import { loadInitialData } from "../services/api"
import { v4 as uuid } from "uuid"
import { getCardsFromLocalStorage } from "../helpers/helperFunctions"

interface CardsContextProps {
  cards: any
  addNewCard(title: string, description: string, color: string): void
  editCard(card: Card): void
}

export const CardsContext = createContext({} as CardsContextProps)

interface Card {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const CardsProvider = ({ children }) => {
  const loadCards = loadInitialData()
  const [cards, setCards] = useState<Card[]>(getCardsFromLocalStorage() || loadCards)

  // TODO criar um useEffect

  function addNewCard(title: string, description: string, color: string) {
    const newCard: Card = {
      id: uuid(),
      title,
      description,
      color
    }

    // const newCards = [...cards]
    // newCards.push(newCard)

    // localStorage.setItem('cards', JSON.stringify(newCards));
    // setCards(newCards);

    setCards((state) => {
      const newState = [...state, newCard]
      localStorage.setItem('cards', JSON.stringify(newState))
      return newState
    })
  }

  function editCard(card: Card) {
    // TODO Formatar a função
    const newCards = [...cards]
    const index = newCards.findIndex(c => c.id === card.id);
    newCards[index] = card;
    setCards(newCards);
  }


  return (
    <CardsContext.Provider value={
      {
        cards,
        addNewCard,
        editCard,
      }}>
      {children}
    </CardsContext.Provider>
  )
}