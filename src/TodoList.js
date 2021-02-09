import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './contexts/todosContext';

function TodoList() {
	const { todos } = useContext(TodosContext);
	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, idx) => (
						<div key={idx}>
							<Todo {...todo} key={todo.id} />
							{idx < todos.length - 1 && <Divider />}
						</div>
					))}
				</List>
			</Paper>
		);
	}
	return null;
}

export default TodoList;
