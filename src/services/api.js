import { v4 as uuid } from "uuid";

export function loadInitialData(){
    return [
        {
            id: uuid(),
            title: "Card Title",
            description: "Card Description",
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