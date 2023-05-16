import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";

export default function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			item: "One half pound bag of Cocoa Covered Almonds Unsalted",
		},
		{
			id: 2,
			checked: false,
			item: "Chocolate with salted Caramel",
		},
		{
			id: 3,
			checked: false,
			item: "Crounchy bounty ",
		},
	]);
	const handleCheck = (id) => {
		console.log(`key: ${id}`);
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem("shoppinglis", JSON.stringify(listItems));
	};
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem("shoppinglis", JSON.stringify(listItems));
	};
	return (
		<div className="App">
			<Header title="Grocery" />
			<Content
				items={items}
				// @ts-ignore
				setItems={setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}
