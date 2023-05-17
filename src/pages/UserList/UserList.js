import React, { useState, useEffect } from "react";
import { Table } from "antd";

function UserList() {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUserList(data);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
      <Table
        // key={userList.map((user) => user.id)}
        dataSource={userList}
        columns={columns}
      ></Table>
    </>
  );
}

export default UserList;
