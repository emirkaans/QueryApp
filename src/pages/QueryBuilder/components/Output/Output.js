import React from "react";

export default function Output({ condition, rules, children }) {
  const renderOutput = () => {
    const currentOutput = { condition };

    if (rules.length > 0) {
      currentOutput.rules = rules.map((rule) => ({ value: rule.value }));
    }

    if (children.length > 0) {
      currentOutput.rules = [
        ...(currentOutput.children || []),
        ...children.map((child) => ({
          condition: child.condition || "AND",
          rules: child.children || [],
        })),
      ];
    }

    return JSON.stringify(currentOutput);
  };

  return (
    <>
      <h4>Output : {renderOutput()}</h4>
    </>
  );
}
