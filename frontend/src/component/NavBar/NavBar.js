import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Cart from "../Cart/Cart";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="list-item">
                    <Link to="/">Logo</Link>
                </li>
                <li className="list-item">
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <DropdownButton
                align="end"
                title="Favourite"
                id="dropdown-menu-align-end"
                variant="warning"
            >
                <Dropdown.Item>
                    <Cart />
                </Dropdown.Item>
            </DropdownButton>
        </nav>
    );
};

export default NavBar;
