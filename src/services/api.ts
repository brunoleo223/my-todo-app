import { v4 as uuid } from "uuid";
import { CardProps } from "../Contexts/CardsContext";

export function loadInitialData(): CardProps[]{
  return [
    {
      id: uuid(),
      title: "Card Title",
      description: "Card Description",
      color: 'default',
    },
    {
      id: uuid(),
      title: "Card Title",
      description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
      color: 'red',
    },
    {
      id: uuid(),
      title: "Card Title",
      description: "Card Description Card Description Card Description Card Description",
      color: 'yellow',
    },
    {
      id: uuid(),
      title: "Card Title",
      description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
      color: 'blue',
    },
    {
      id: uuid(),
      title: "Card Title",
      description: "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
      color: 'purple',
    }
  ]
}