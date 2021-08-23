import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

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
            <div class="dropdown">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
