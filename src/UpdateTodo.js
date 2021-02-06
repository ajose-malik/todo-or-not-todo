import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';
import './UpdateTodo.css';

function UpdateTodo({ updateTodo, id, task, toggleUpdate }) {
	const [value, handleChange, reset] = useInputState(task);
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				updateTodo(id, value);
				reset();
				toggleUpdate();
			}}
			className='UpdateTodo-margin'>
			<TextField
				margin='normal'
				value={value}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
		</form>
	);
}

export default UpdateTodo;
