export const getCardsFromLocalStorage = () => {
    const cards = localStorage.getItem('cards');
    if (cards) {
      return JSON.parse(cards);
    }
    return cards;
}