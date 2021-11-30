import React from "react"
import { Link } from "react-router-dom"
import logo from "../LogoDrinkManual.png"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/" className="nav-logo-all">
                    <img src={logo} alt="drink manual logo" className="nav-logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">O nas</Link>
                    </li>
                    <li>
                        <Link to="contact">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;