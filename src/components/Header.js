import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { OrderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";

function Header() {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="header">
      <h1>
        <Link style={linkStyle} to="/">
          Query App
        </Link>
      </h1>
      <ul className="header-list">
        <li>
          <Link style={linkStyle} to="/userlist">
            <OrderedListOutlined /> User List
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/querybuilder">
            {" "}
            <PlusCircleOutlined />
            Query Builder
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
