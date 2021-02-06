import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';
import './TodoInput.css';

function TodoInput({ addTodo }) {
	const [value, handleChange, resetValue] = useInputState('');
	return (
		<Paper className='TodoInput-my-1 TodoInput-px-1'>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo(value);
					resetValue();
				}}>
				<TextField
					value={value}
					onChange={handleChange}
					label='Add Todo'
					margin='normal'
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoInput;
