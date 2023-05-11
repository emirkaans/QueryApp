import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
//PAGES
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import QueryBuilder from "./pages/QueryBuilder";

function App() {
  const [userList, setUserList] = useState([]);
  const [newUser, setNewUser] = useState("");

  const getUsers = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    setUserList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlist" element={<UserList userList={userList} />} />
          <Route path="querybuilder" element={<QueryBuilder />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
