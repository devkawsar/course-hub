import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<h1 className="AppTitle">
				Course <span className="hub">Hub</span>
			</h1>
			<nav>
				<a href="/courses">Courses</a>
				<a href="/review">Review</a>
				<a href="/summary">Summary</a>
			</nav>
		</div>
	);
};

export default Header;
