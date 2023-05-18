// @ts-nocheck
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { LineItem } from "../lineItem/LineItem";

export const ItemList = ({ items, handleCheck, handleDelete }) => {
	return (
		<ul>
			{items.map((item) => (
				<LineItem
					key={item.id}
					item={item}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};
