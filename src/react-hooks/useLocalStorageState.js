import { useState, useEffect } from 'react';

const useLocalStorageState = (id, defaultValue) => {
	const checkLocalStorage = () => {
		let value;
		try {
			value = JSON.parse(localStorage.getItem(id) || String(defaultValue));
		} catch (e) {
			value = defaultValue;
		}
		return value;
	};

	const [state, setState] = useState(checkLocalStorage);

	useEffect(() => {
		localStorage.setItem(id, JSON.stringify(state));
	}, [id, state]);

	return [state, setState];
};

export default useLocalStorageState;
