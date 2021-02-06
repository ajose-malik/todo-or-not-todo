import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import './TodoApp.css';

function TodoApp() {
	const currentTodos = JSON.parse(localStorage.getItem('todo-list') || '[]');
	const [todos, setTodos] = useState(currentTodos);

	useEffect(() => {
		localStorage.setItem('todo-list', JSON.stringify(todos));
	}, [todos]);

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

	const updateTodo = (todoId, newTodo) => {
		const updatedTodo = todos.map(todo =>
			todo.id === todoId ? { ...todo, task: newTodo } : todo
		);
		setTodos(updatedTodo);
	};

	return (
		<Paper className='TodoApp-paper' elevation={0}>
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
						updateTodo={updateTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
