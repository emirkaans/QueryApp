import React, { useState } from "react";
import QueryCard from "./components/QueryCard";
import { Button } from "antd";

const QueryBuilder = () => {
  const [condition, setCondition] = useState("AND");
  const [cards, setCards] = useState([
    {
      id: crypto.randomUUID(),
    },
  ]);

  const addNewCard = () => {
    setCards([
      ...cards,
      {
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleConditionChange = (newCondition) => {
    setCondition(newCondition);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  return (
    <div>
      <Button onClick={addNewCard}>Add New Card</Button>
      {cards.map((card) => (
        <QueryCard
          key={card.id}
          card={card}
          cardsLength={cards.length}
          level={1}
          condition={condition}
          onConditionChange={handleConditionChange}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default QueryBuilder;
