import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, currentTodos, reducer) => {
	const [state, dispatch] = useReducer(reducer, currentTodos, () => {
		let value;
		try {
			value = JSON.parse(localStorage.getItem(key) || String(currentTodos));
		} catch (e) {
			value = currentTodos;
		}
		return value;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, dispatch];
};

export default useLocalStorageReducer;
