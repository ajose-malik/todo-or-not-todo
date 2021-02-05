/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default startValue => {
	const [value, setValue] = useState(startValue);
	const handleChange = e => {
		setValue(e.target.value);
	};

	const resetValue = () => {
		setValue('');
	};
	return [value, handleChange, resetValue];
};
