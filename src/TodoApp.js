import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import './TodoApp.css';

function TodoApp() {
	const currentTodos = [
		{ id: 1, task: 'get shit done', completed: false },
		{ id: 2, task: 'get job', completed: true }
	];
	const [todos, setTodos] = useState(currentTodos);
	const addTodo = newTodo => {
		setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
	};

	const deleteTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = todoId => {
		const updatedTodo = todos.map(todo =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodo);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#eee'
			}}
			elevation={0}>
			<AppBar color='primary' position='static' className='TodoApp-h-50px'>
				<Toolbar>
					<Typography color='inherit'>Todo List</Typography>
				</Toolbar>
			</AppBar>
			<Grid className='TodoApp-mt-1' container justify='center'>
				<Grid item xs={8} md={6} lg={4}>
					<TodoInput addTodo={addTodo} />
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
						toggleTodo={toggleTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
