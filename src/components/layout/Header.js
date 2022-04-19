import React from "react";
import logo from "assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import "styles/header.scss";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="log-in">
          <AiOutlineUser />
          Log in
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
