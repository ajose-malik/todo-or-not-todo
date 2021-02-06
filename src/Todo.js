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
import useToggleState from './react-hooks/useToggleState';
import UpdateTodo from './UpdateTodo';
import './Todo.css';

function Todo({ task, completed, id, deleteTodo, toggleTodo, updateTodo }) {
	const [update, toggle] = useToggleState(false);
	return (
		<ListItem className='Todo-height'>
			{update ? (
				<UpdateTodo
					updateTodo={updateTodo}
					id={id}
					task={task}
					toggleUpdate={toggle}
				/>
			) : (
				<>
					<Checkbox checked={completed} onClick={() => toggleTodo(id)} />
					<ListItemText
						style={{ textDecoration: completed ? 'line-through' : 'none' }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label='Edit' onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default Todo;
