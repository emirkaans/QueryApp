import React, { useState } from "react";
import "./QueryCard.css";
import { Card } from "antd";

//////// Components ////////
import ConditionButton from "./ConditionButton/ConditionButton";
import MainButtons from "./MainButtons/MainButtons";
import InputSection from "./InputSection/InputSection";
import Output from "./Output/Output";

const QueryCard = ({
  card,
  level,
  onConditionChange,
  deleteCard,
  cardsLength,
}) => {
  const [children, setChildren] = useState([]);
  const [condition, setCondition] = useState("AND");
  const [rules, setRules] = useState([]);
  const [newRuleValue, setNewRuleValue] = useState("");

  const handleAddGroup = () => {
    const newChild = {
      id: crypto.randomUUID(),
      condition: "AND",
      rules: [],
    };
    setChildren([...children, newChild]);
    onConditionChange([...children, newChild]);
  };

  const handleAddRule = () => {
    const newRule = {
      value: newRuleValue,
    };
    setRules([...rules, newRule]);
    setNewRuleValue("");
  };

  const handleToggleCondition = () => {
    const newCondition = condition === "AND" ? "OR" : "AND";
    setCondition(newCondition);
    onConditionChange(newCondition);
  };

  const handleRuleValueChange = (index, value) => {
    const updatedRules = [...rules];
    updatedRules[index].value = value;
    setRules(updatedRules);
  };

  const handleChildConditionChange = (index, newChildCondition) => {
    const updatedChildren = [...children];
    updatedChildren[index].condition = newChildCondition;

    setChildren(updatedChildren);
    onConditionChange(updatedChildren);
  };

  const renderChildCards = () => {
    if (children.length === 0) return null;

    return (
      <div>
        {children.map((child, index) => (
          <QueryCard
            card={child}
            id={child.id}
            key={index}
            level={level + 1}
            onConditionChange={(newChildren) =>
              handleChildConditionChange(index, newChildren)
            }
            deleteCard={deleteChildCard}
          />
        ))}
      </div>
    );
  };

  const deleteChildCard = (id) => {
    const newCards = children.filter((card) => card.id !== id);
    setChildren(newCards);
  };

  return (
    <>
      <Card
        title={`Query Card Level ${level} `}
        style={{ marginLeft: `${level * 25}px` }}
      >
        <div className="form-section">
          <ConditionButton
            condition={condition}
            handleToggleCondition={handleToggleCondition}
          />

          <MainButtons
            card={card}
            cardsLength={cardsLength}
            handleAddGroup={handleAddGroup}
            handleAddRule={handleAddRule}
            deleteCard={deleteCard}
          />
        </div>

        <InputSection
          rules={rules}
          setRules={setRules}
          handleRuleValueChange={handleRuleValueChange}
        />

        <Output condition={condition} rules={rules} children={children} />
      </Card>
      {renderChildCards()}
    </>
  );
};

export default QueryCard;
