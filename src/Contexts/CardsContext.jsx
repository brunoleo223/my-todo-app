import { createContext, useState } from "react";
import { getCardsFromLocalStorage } from "../helpers/getCardsFromLocalStorage";
import { loadInitialData } from "../services/api";

export const CardsContext = createContext();

export const CardsProvider =({ children }) => {
    const loadCards = loadInitialData();
    const [cards, setCards] = useState(getCardsFromLocalStorage() || loadCards);

    return (
        <CardsContext.Provider value={{cards, setCards}}>
            {children}
        </CardsContext.Provider>
    )
}