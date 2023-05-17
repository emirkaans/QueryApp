import React from "react";
import { Button, Form, Space } from "antd";
import {
  PlusOutlined,
  PlusCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

export default function MainButtons({
  card,
  handleAddGroup,
  handleAddRule,
  deleteCard,
  cardsLength,
}) {
  return (
    <Form.Item>
      <Space>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddGroup}>
          Add Group
        </Button>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={handleAddRule}
        >
          Add Rule
        </Button>

        {cardsLength > 1 ? (
          <Button
            type="primary"
            danger
            icon={<CloseOutlined />}
            onClick={() => {
              deleteCard(card.id);
            }}
          >
            Delete
          </Button>
        ) : null}
      </Space>
    </Form.Item>
  );
}
