import React from "react";
import { Link } from "react-router-dom";

function Logo({ linkStyle }) {
  return (
    <div className="logo">
      <h1>
        <Link style={linkStyle} to="/">
          Query App
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
