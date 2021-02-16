import { v4 as uuidv4 } from "uuid";

const currentTodos = JSON.parse(localStorage.getItem("todo-list")) || [
	{ id: uuidv4(), task: "hellsYaH", completed: false }
];

const todosReducer = (state = currentTodos, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, { id: uuidv4(), task: action.task, completed: false }];
		case "DELETE":
			return state.filter(todo => todo.id !== action.id);
		case "TOGGLE":
			return state.map(todo =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		case "UPDATE":
			return state.map(todo =>
				todo.id === action.id ? { ...todo, task: action.newTask } : todo
			);
		default:
			return state;
	}
};

export default todosReducer;
