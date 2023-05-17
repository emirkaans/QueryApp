import React from "react";
import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function InputSection({
  rules,
  setRules,
  handleRuleValueChange,
}) {
  const deleteInput = (inputId) => {
    const deletVal = [...rules];
    deletVal.splice(inputId, 1);
    setRules(deletVal);
  };

  return (
    <>
      {rules.map((rule, index) => (
        <Form.Item key={index}>
          <Input
            value={rule.value}
            onChange={(e) => handleRuleValueChange(index, e.target.value)}
          />
          <Button
            type="primary"
            danger
            icon={<CloseOutlined />}
            onClick={() => deleteInput(index)}
          >
            Delete
          </Button>
        </Form.Item>
      ))}
    </>
  );
}
