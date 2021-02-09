import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer';

const currentTodos = JSON.parse(localStorage.getItem('todo-list') || '[]');

export const TodosContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useReducer(todosReducer, currentTodos);

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</TodosContext.Provider>
	);
}
