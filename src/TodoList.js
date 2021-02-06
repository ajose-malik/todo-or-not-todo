import React from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
	return (
		<Paper>
			<List>
				{todos.map(todo => (
					<>
						<Todo
							id={todo.id}
							key={todo.id}
							task={todo.task}
							completed={todo.completed}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
						/>
						<Divider />
					</>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
