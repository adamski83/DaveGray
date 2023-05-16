import React from "react";
import { ItemList } from "../itemList/ItemList";
import "./Content.css";

export const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				"no content to display"
			)}
		</main>
	);
};
