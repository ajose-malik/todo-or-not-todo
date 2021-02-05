import React, { useState } from 'react';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
	const firstTodos = [
		{ id: 1, task: 'get shit done', completed: false },
		{ id: 2, task: 'get job', completed: true }
	];
	const [todos, setTodos] = useState(firstTodos);
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
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;
