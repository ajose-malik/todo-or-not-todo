import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer';

const currentTodos = JSON.parse(localStorage.getItem('todo-list') || '[]');

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useReducer(todosReducer, currentTodos);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
