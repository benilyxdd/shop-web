import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<ul className="nav-link">
				<li>
					<Link to="/">Logo</Link>
				</li>
				<li className="About">
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
