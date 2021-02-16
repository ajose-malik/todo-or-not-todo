import { v4 as uuidv4 } from "uuid";

const key = "todo-list";

const currentTodos = JSON.parse(localStorage.getItem(key)) || [];

const todosReducer = (state = currentTodos, action) => {
	switch (action.type) {
		case "ADD":
			localStorage.setItem(
				key,
				JSON.stringify([
					...state,
					{ id: uuidv4(), task: action.task, completed: false }
				])
			);

			return [...state, { id: uuidv4(), task: action.task, completed: false }];

		case "DELETE":
			localStorage.removeItem(key["action.id"]);
			localStorage.setItem(
				key,
				JSON.stringify(state.filter(todo => todo.id !== action.id))
			);

			return state.filter(todo => todo.id !== action.id);

		case "TOGGLE":
			localStorage.setItem(
				key,
				JSON.stringify(
					state.map(todo =>
						todo.id === action.id
							? { ...todo, completed: !todo.completed }
							: todo
					)
				)
			);

			return state.map(todo =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);

		case "UPDATE":
			localStorage.setItem(
				key,
				JSON.stringify(
					state.map(todo =>
						todo.id === action.id ? { ...todo, task: action.newTask } : todo
					)
				)
			);

			return state.map(todo =>
				todo.id === action.id ? { ...todo, task: action.newTask } : todo
			);
		default:
			return state;
	}
};

export default todosReducer;
