import React from "react";
import "./Header.css";
import Logo from "./Logo";
import HeaderList from "./HeaderList";

function Header() {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="header">
      <Logo linkStyle={linkStyle} />
      <HeaderList linkStyle={linkStyle} />
    </div>
  );
}

export default Header;
