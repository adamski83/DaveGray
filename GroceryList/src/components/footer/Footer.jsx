import React from "react";
import "./Footer.css";

export const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer>
			<p>
				Today is {today.getDate()}.{today.getMonth() + 1}.
				{today.getFullYear()}
				.r
			</p>
			<p>Amount of tasks in your list: {length}</p>
		</footer>
	);
};
