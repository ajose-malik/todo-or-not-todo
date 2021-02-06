import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

const useTodoState = currentTodos => {
	const [todos, setTodos] = useLocalStorageState('todo-list', currentTodos);

	return {
		todos,
		addTodo: newTodo => {
			setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
		},

		deleteTodo: todoId => {
			const updatedTodos = todos.filter(todo => todo.id !== todoId);
			setTodos(updatedTodos);
		},

		toggleTodo: todoId => {
			const updatedTodo = todos.map(todo =>
				todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
			);
			setTodos(updatedTodo);
		},

		updateTodo: (todoId, newTodo) => {
			const updatedTodo = todos.map(todo =>
				todo.id === todoId ? { ...todo, task: newTodo } : todo
			);
			setTodos(updatedTodo);
		}
	};
};

export default useTodoState;
