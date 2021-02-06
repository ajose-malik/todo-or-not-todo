import React from 'react';
import useTodoState from './react-hooks/useTodoState';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import './TodoApp.css';

function TodoApp() {
	const currentTodos = JSON.parse(localStorage.getItem('todo-list') || '[]');
	const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } = useTodoState(
		currentTodos
	);

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
