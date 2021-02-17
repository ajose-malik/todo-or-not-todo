import React, { memo } from "react";
import { connect } from "react-redux";
import { Paper, TextField, ListItemText, ListItem } from "@material-ui/core";
import { addMotivation, getMotivation } from "./reducers/actionCreator";
import useInputState from "./react-hooks/useInputState";
import useToggleState from "./react-hooks/useToggleState";
import "./MotivationInput.css";

function MotivationInput({ add, get, motivation }) {
	setInterval(get, 20000);

	const [value, handleChange, resetValue] = useInputState("");
	const [toggleState, handleToggleState] = useToggleState(true);

	return (
		<Paper className="MotivationInput-my-1 MotivationInput-px-1">
			{toggleState ? (
				<ListItem className="MotivationInput-height">
					<ListItemText onClick={handleToggleState}>{motivation}</ListItemText>
				</ListItem>
			) : (
				<form
					onSubmit={e => {
						e.preventDefault();
						add(value);
						resetValue();
					}}
					onMouseOut={e => {
						setTimeout(handleToggleState, 1000);
					}}>
					<TextField
						value={value}
						onChange={handleChange}
						label="Add Motivation"
						margin="normal"
						fullWidth
					/>
				</form>
			)}
		</Paper>
	);
}

const mapStateToProps = state => ({
	motivation: state.motivation
});

const mapDispatchToProps = dispatch => ({
	get: () => dispatch(getMotivation()),
	add: value => dispatch(addMotivation(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(memo(MotivationInput));
