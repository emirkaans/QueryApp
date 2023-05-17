import React from "react";
import { Link } from "react-router-dom";
import { OrderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";

function HeaderList({ linkStyle }) {
  return (
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
  );
}

export default HeaderList;
