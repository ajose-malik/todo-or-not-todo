import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';

function TodoInput({ addTodo }) {
	const [value, handleChange, resetValue] = useInputState('');
	return (
		<Paper>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo(value);
					resetValue();
				}}>
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}

export default TodoInput;
