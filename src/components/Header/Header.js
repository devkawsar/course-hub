import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<h1 className="AppTitle">
				Course <span className="hub">Hub</span>
			</h1>
			<nav>
				<a href="/home">Home</a>
				<a href="/courses">Courses</a>
				<a href="/about">About</a>
			</nav>
		</div>
	);
};

export default Header;
