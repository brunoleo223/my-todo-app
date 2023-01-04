import React, { useContext } from "react";
import { Container } from "./style";
import Card from "../Card";
import { CardsContext } from "../../Contexts/CardsContext";

export default function List({ openPanel }) {
  const { cards } = useContext(CardsContext)

  return (
    <Container>
      {[...cards].reverse().map((card) => (
        <Card key={card.id} data={card} openPanel={openPanel} />
      ))}
    </Container>
  )
}
