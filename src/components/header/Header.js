import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import './Header.css';

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-left">
        <a href="/">Home</a>
        <a href="/search">Search</a>
      </div>
      <div className="app-header-right">
        <a href="/">Gmail</a>
        <a href="/">Images</a>
        <AppsIcon />
        <Avatar
          src=""
          style={{ border: "1px solid green" }}
        />
      </div>
    </div>
  );
};

export default Header;