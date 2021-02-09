import React, { useContext, memo } from 'react';
import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	ListItemSecondaryAction
} from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
// import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useToggleState from './react-hooks/useToggleState';
import { DispatchContext } from './contexts/todosContext';
import UpdateTodo from './UpdateTodo';
import './Todo.css';

function Todo({ task, completed, id }) {
	const dispatch = useContext(DispatchContext);
	const [update, toggle] = useToggleState(false);
	console.log('from todo - rerender', task);

	return (
		<ListItem className='Todo-height'>
			{update ? (
				<UpdateTodo id={id} task={task} toggleUpdate={toggle} />
			) : (
				<>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => dispatch({ type: 'TOGGLE', id: id })}
					/>
					<ListItemText
						onClick={toggle}
						style={{ textDecoration: completed ? 'line-through' : 'none' }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton
							aria-label='Delete'
							onClick={() => dispatch({ type: 'DELETE', id: id })}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default memo(Todo);
