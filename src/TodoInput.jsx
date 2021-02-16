import React from "react";
import { connect } from "react-redux";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./react-hooks/useInputState";
import { addTodo } from "./reducers/actionCreator";
import "./TodoInput.css";

function TodoInput({ add }) {
	const [value, handleChange, resetValue] = useInputState("");
	return (
		<Paper className="TodoInput-my-1 TodoInput-px-1">
			<form
				onSubmit={e => {
					e.preventDefault();
					add(value);
					resetValue();
				}}>
				<TextField
					value={value}
					onChange={handleChange}
					label="Add Todo"
					margin="normal"
					fullWidth
				/>
			</form>
		</Paper>
	);
}

const mapDispatchToProps = dispatch => ({
	add: value => dispatch(addTodo(value))
});

export default connect(null, mapDispatchToProps)(TodoInput);
