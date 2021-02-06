import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';
import './UpdateTodo.css';

function UpdateTodo({ updateTodo, id, task, toggleUpdate }) {
	const [value, handleChange] = useInputState(task);
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				updateTodo(id, value);
				toggleUpdate();
			}}
			onMouseOut={e => {
				setTimeout(() => {
					toggleUpdate();
				}, 1000);
			}}
			className='UpdateTodo-margin'>
			<TextField value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
}

export default UpdateTodo;
