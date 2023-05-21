import React, { useRef } from "react";
import "./addItem.css";
import { FaPlus } from "react-icons/fa";

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef();

	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem">Add Item</label>
			<input
				autoFocus
				// @ts-ignore
				ref={inputRef}
				id="addItem"
				type="text"
				placeholder="Add Item"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button
				type="submit"
				aria-label="Add Item"
				// @ts-ignore
				onClick={() => inputRef.current.focus()}>
				<FaPlus />
			</button>
		</form>
	);
};
