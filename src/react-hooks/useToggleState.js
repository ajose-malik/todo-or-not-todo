/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

export default changeToggleState => {
	const [toggleState, setToggleState] = useState(changeToggleState);
	const handleToggleState = () => {
		setToggleState(!toggleState);
	};
	return [toggleState, handleToggleState];

	// return {
	// 	untoggle,
	// 	toggle: () => {
	// 		toggled(!untoggle);
	// 	}
	// };
};
