import React from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<>
							<Todo
								id={todo.id}
								key={todo.id}
								task={todo.task}
								completed={todo.completed}
								deleteTodo={deleteTodo}
								toggleTodo={toggleTodo}
								updateTodo={updateTodo}
							/>
							{i < todos.length - 1 && <Divider />}
						</>
					))}
				</List>
			</Paper>
		);
	}
	return null;
}

export default TodoList;
