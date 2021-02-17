import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoInput from "./TodoInput";
import MotivationInput from "./MotivationInput";
import TodoList from "./TodoList";
import "./TodoApp.css";

function TodoApp() {
	return (
		<Paper className="TodoApp-paper" elevation={0}>
			<AppBar position="static" className="TodoApp-h-50px TodoApp-center">
				<Toolbar>
					<Typography>my SUPERUNDERWHELMINGTODO app</Typography>
				</Toolbar>
			</AppBar>

			<Grid className="TodoApp-mt-1" container justify="center">
				<Grid item xs={8} md={6} lg={4}>
					<MotivationInput />

					<TodoInput />
					<TodoList />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
