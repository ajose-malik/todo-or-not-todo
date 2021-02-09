import React, { createContext } from 'react';
import useTodoState from '../react-hooks/useTodoState';

const currentTodos = JSON.parse(localStorage.getItem('todo-list') || '[]');

export const TodosContext = createContext();

export function TodosProvider(props) {
	const todosFeatures = useTodoState(currentTodos);

	return (
		<TodosContext.Provider value={todosFeatures}>
			{props.children}
		</TodosContext.Provider>
	);
}
