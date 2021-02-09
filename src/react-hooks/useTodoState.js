import useLocalStorageState from './useLocalStorageState';

const useTodoState = currentTodos => {
	const [todos, setTodos] = useLocalStorageState('todo-list', currentTodos);

	return [todos, setTodos];
};

export default useTodoState;
