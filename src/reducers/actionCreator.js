// Todos creator
export const addTodo = value => ({ type: "ADD", task: value })
export const toggleTodo = id => ({ type: "TOGGLE", id })
export const deleteTodo = id => ({ type: "DELETE", id })
export const updateTodo = (value, id) => ({
	type: "UPDATE",
	newTask: value,
	id
})
