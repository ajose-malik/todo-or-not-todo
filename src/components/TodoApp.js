import React from "react"
import { Paper, Grid } from "@material-ui/core"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import "./TodoApp.css"

function TodoApp() {
	return (
		<Paper className="TodoApp-paper" elevation={0}>
			<Grid className="TodoApp-mt-1" container justify="center">
				<Grid item xs={8} md={6} lg={4}>
					<TodoInput />
					<TodoList />
				</Grid>
			</Grid>
		</Paper>
	)
}

export default TodoApp
