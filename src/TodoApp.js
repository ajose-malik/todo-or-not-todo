import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodosProvider } from './contexts/todosContext';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import './TodoApp.css';

function TodoApp() {
	return (
		<Paper className='TodoApp-paper' elevation={0}>
			<AppBar color='primary' position='static' className='TodoApp-h-50px'>
				<Toolbar>
					<Typography color='inherit'>Todo List</Typography>
				</Toolbar>
			</AppBar>
			<Grid className='TodoApp-mt-1' container justify='center'>
				<Grid item xs={8} md={6} lg={4}>
					<TodosProvider>
						<TodoInput />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
