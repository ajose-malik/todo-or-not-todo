import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './react-hooks/useInputState';
import { TodosContext } from './contexts/todosContext';
import './UpdateTodo.css';

function UpdateTodo({ id, task, toggleUpdate }) {
	const { dispatch } = useContext(TodosContext);
	const [value, handleChange] = useInputState(task);
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				dispatch({ type: 'UPDATE', id: id, newTask: value });
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
