import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SearchItem } from "./components/searchItem/SearchItem";
import { AddItem } from "./components/addItem/AddItem";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";

export default function App() {
	const [items, setItems] = useState(
		// @ts-ignore
		JSON.parse(localStorage.getItem("shoppinglist"))
	);
	const [search, setSearch] = useState("");

	const [newItem, setNewItem] = useState("");

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem("shoppinglist", JSON.stringify(newItems));
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItem = [...items, myNewItem];

		setAndSaveItems(listItem);
	};

	const handleCheck = (id) => {
		console.log(`key: ${id}`);
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setAndSaveItems(listItems);
	};
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);

		setNewItem("");
	};

	return (
		<div className="App">
			<Header title="Grocery" />
			<AddItem
				// @ts-ignore
				newItem={newItem}
				setNewItem={setNewItem}
				// @ts-ignore
				handleSubmit={handleSubmit}
			/>
			<SearchItem
				// @ts-ignore
				search={search}
				setSearch={setSearch}
			/>
			<Content
				items={items.filter((item) =>
					item.item.toLowerCase().includes(search.toLowerCase())
				)}
				// @ts-ignore
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}
