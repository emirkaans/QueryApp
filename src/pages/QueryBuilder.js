import React from "react";
import { PlusOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

function QueryBuilder() {
  return (
    <>
      <Button type="primary" icon={<PlusOutlined />}>
        Add rule
      </Button>
      <Button type="primary" icon={<PlusCircleOutlined />}>
        Add group
      </Button>
    </>
  );
}

export default QueryBuilder;
