import React from 'react';
import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	ListItemSecondaryAction
} from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import './Todo.css';

function Todo({ task, completed, id, deleteTodo, toggleTodo }) {
	return (
		<ListItem>
			<Checkbox checked={completed} onClick={() => toggleTodo(id)} />
			<ListItemText
				style={{ textDecoration: completed ? 'line-through' : 'none' }}>
				{task}
			</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label='Edit'>
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default Todo;
