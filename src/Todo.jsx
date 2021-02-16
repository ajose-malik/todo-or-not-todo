import React, { memo } from "react";
import { connect } from "react-redux";
import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { toggleTodo, deleteTodo, updateTodo } from "./reducers/actionCreator";
import useToggleState from "./react-hooks/useToggleState";
import UpdateTodo from "./UpdateTodo";
import "./Todo.css";

function Todo({ task, completed, id, toggleChecked, remove, update }) {
	const [toggleState, handleToggleState] = useToggleState(false);

	return (
		<ListItem className="Todo-height">
			{toggleState ? (
				<UpdateTodo
					id={id}
					task={task}
					update={update}
					handleToggleState={handleToggleState}
				/>
			) : (
				<>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => toggleChecked(id)}
					/>
					<ListItemText
						onClick={handleToggleState}
						style={{ textDecoration: completed ? "line-through" : "none" }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => remove(id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleChecked: id => dispatch(toggleTodo(id)),
	remove: id => dispatch(deleteTodo(id)),
	update: (value, id) => dispatch(updateTodo(value, id))
});

export default connect(null, mapDispatchToProps)(memo(Todo));
