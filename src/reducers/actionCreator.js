// Todos creator
export const addTodo = value => ({ type: "ADD", task: value });
export const toggleTodo = id => ({ type: "TOGGLE", id });
export const deleteTodo = id => ({ type: "DELETE", id });
export const updateTodo = (value, id) => ({
	type: "UPDATE",
	newTask: value,
	id
});

// Motivation creator
export const addMotivation = value => ({
	type: "ADD_MOTIVATION",
	newMotivation: value
});
export const getMotivation = () => ({
	type: "GET_MOTIVATION"
});
