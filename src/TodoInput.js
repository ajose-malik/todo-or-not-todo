import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';
import { DispatchContext } from './contexts/todosContext';
import './TodoInput.css';

function TodoInput() {
	const [value, handleChange, resetValue] = useInputState('');
	const dispatch = useContext(DispatchContext);
	console.log('from todoInput');
	return (
		<Paper className='TodoInput-my-1 TodoInput-px-1'>
			<form
				onSubmit={e => {
					e.preventDefault();
					dispatch({ type: 'ADD', task: value });
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
