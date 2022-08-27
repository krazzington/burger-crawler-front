import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/RoughLogo.png";
import "./Header.scss";
import Button from "../Button/Button";

const Header = (props) => {
  const handleClick = (e) => {
    e.preventdefault();
    props.history.push("/signUp");
  };

  return (
    <header className="header">
      <div className="header__logoContainer">
        <Link to="/" className="header__logoDiv">
          <img alt="BC Logo" src={logo} className="header__logoDiv--logo"></img>
        </Link>
      </div>
      <div className="header__links">
        <Link to="/signup" className="header__links-item">
          <Button
            className="header__links-item--signUp"
            handlePush={handleClick}
            cname="button__primary"
            title="Sign Up"
          />
        </Link>
        <Link to="/signin" className="header__links-item">
          <Button
            cname="button__primary signIn"
            className="header__links-item--signIn"
            title="Sign In"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;

