import React from "react";
import { Button, Form } from "antd";

export default function ConditionButton({ condition, handleToggleCondition }) {
  return (
    <Form>
      <Form.Item label="Condition">
        <Button onClick={handleToggleCondition}>{condition}</Button>
      </Form.Item>
    </Form>
  );
}
