export default function descriptionLength(descriptionLength) {
  let cardSize = 0;

  if (descriptionLength <= 100) {
    cardSize = 0;
  } else if (descriptionLength > 100 && descriptionLength <= 200) {
    cardSize = 1;
  } else if (descriptionLength > 200 && descriptionLength <= 300) {
    cardSize = 2;
  } else {
    cardSize = 3;
  }

  return cardSize;

}

export const getCardsFromLocalStorage = () => {
  const cards = localStorage.getItem('cards');
  if (cards) {
    return JSON.parse(cards);
  }
  return cards;
}

