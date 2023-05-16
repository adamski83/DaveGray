import React from "react";
import "./Header.css";

export const Header = ({ title }) => {
	return (
		<header>
			<h1>{title} List</h1>
		</header>
	);
};
Header.defaultProps = { title: "Default" };
