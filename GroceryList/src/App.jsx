// @ts-nocheck
import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { SearchItem } from './components/searchItem/SearchItem';
import { AddItem } from './components/addItem/AddItem';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

export default function App() {
	const API_URL = `http://localhost:3500/items`;
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState('');
	const [newItem, setNewItem] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) {
					throw Error('Did not receive expected data !');
				}
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItem = [...items, myNewItem];

		setItems(listItem);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);

		setNewItem('');
	};

	return (
		<div className='App'>
			<Header title='Grocery' />
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
			<main>
				{isLoading && <p>Loading items ...</p>}
				{fetchError && (
					<p
						style={{
							color: 'red',
							fontSize: '28px',
						}}>{`Error:${fetchError}`}</p>
				)}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item
								.toLowerCase()
								.includes(search.toLowerCase())
						)}
						// @ts-ignore
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>

			<Footer length={items.length} />
		</div>
	);
}
