import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from  "../../assets/images/RoughLogo";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className ="header__logoContainer">
                <Link to ="/" className="header__logo"><img alt ="BC Logo"src ={logo}></img></Link>
            </div>
            <div className="header__links">
                <Link to ="/warehouse" className="header__links-item"><div>Warehouses</div></Link>
                <Link to ="/inventory" className="header__links-item"><div>Inventory</div></Link>
            </div>
        </header>
    )
}
export default Header;
 