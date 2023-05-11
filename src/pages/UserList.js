import React from "react";
import { Table } from "antd";

function UserList({ userList }) {
  const columns = [
    { title: "User ID", key: "id", dataIndex: "id" },
    { title: "Name", key: "id", dataIndex: "name" },
    { title: "Username", key: "id", dataIndex: "username" },
    { title: "Email", key: "id", dataIndex: "email" },
    { title: "Phone", key: "id", dataIndex: "phone" },
    { title: "Website", key: "id", dataIndex: "website" },
  ];

  return (
    <>
      <Table dataSource={userList} columns={columns}></Table>
    </>
  );
}

export default UserList;
