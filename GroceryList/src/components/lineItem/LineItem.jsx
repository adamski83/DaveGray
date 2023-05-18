import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className="item">
			<input
				type="checkbox"
				checked={item.checked}
				onChange={() => handleCheck(item.id)}
			/>

			<label
				// @ts-ignore
				style={item.checked ? { textDecoration: "line-through" } : null}
				onDoubleClick={() => handleCheck(item.id)}>
				{item.item}
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(item.id)}
				role="button"
				// @ts-ignore
				tabIndex="0"
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	);
};
