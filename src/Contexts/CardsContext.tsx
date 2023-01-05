import React, { createContext, useState } from "react";
import { getCardsFromLocalStorage } from "../helpers/getCardsFromLocalStorage";
import { loadInitialData } from "../services/api";
import { v4 as uuid } from "uuid"

interface CardsContextProps {
    cards: any;
    addNewCard(title: any, description: any, color: any): void;
    editCard(card: CardProps): void;
}

interface CardProps {
    id: string;
    title: string;
    description: string;
    color: string;
}

export const CardsContext = createContext({} as CardsContextProps);


export const CardsProvider =({ children }) => {
    const loadCards = loadInitialData();
    const [cards, setCards] = useState<CardProps[]>(getCardsFromLocalStorage() || loadCards);
    
    function addNewCard(title: string, description: string, color: string){
        const newCard: CardProps = {
            id: uuid(),
            title,
            description,
            color
        }
        
        setCards((state) => {
            const newCards = [...state, newCard]
            localStorage.setItem('cards', JSON.stringify(newCards));
            return newCards;
        });
    }
    
    function editCard(card: CardProps){
        setCards((state) => {
            const newCards = state.map((stateCard) => {
                if(stateCard.id === card.id){
                    return card;
                }
                return stateCard;
            })
            localStorage.setItem('cards', JSON.stringify(newCards));
            return newCards;
        });
    }
    
    return (
        <CardsContext.Provider value={{cards, addNewCard, editCard}}>
        {children}
        </CardsContext.Provider>
        )
    }