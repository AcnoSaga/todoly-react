import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import TodoList from './components/todo-list/todo-list.component';
import AddItemInput from './components/add-item-input/add-item-input.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<TodoList />
			<AddItemInput />
		</div>
	);
}

export default App;
