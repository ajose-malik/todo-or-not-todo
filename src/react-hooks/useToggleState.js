/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default (toggleState = false) => {
	const [untoggle, toggled] = useState(toggleState);
	const toggle = () => {
		toggled(!untoggle);
	};

	return [untoggle, toggle];
};
