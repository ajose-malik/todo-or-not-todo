import React, { useState } from 'react';
// import TodoList from './';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar } from '@material-ui/core';

function TodoApp() {
	const firstTodos = [
		{ id: 1, task: 'get shit done', completed: false },
		{ id: 2, task: 'get job', completed: true }
	];
	const [todos, setTodos] = useState(firstTodos);
	const addTodo = newTodo => {
		setTodos([...todos, { id: 3, task: newTodo, completed: false }]);
	};
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#ccc'
			}}
			elevation={0}>
			<AppBar color='primary' position='static' style={{ height: '50px' }}>
				<Toolbar>
					<Typography color='inherit'>Todo List</Typography>
				</Toolbar>
			</AppBar>
			<TodoInput addTodo={addTodo} />
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;
