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
		</nav>
	);
};

export default NavBar;
