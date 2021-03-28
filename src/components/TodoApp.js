import React from "react"
import { Grid } from "@material-ui/core"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import "./TodoApp.css"

function TodoApp() {
	return (
		<Grid className="TodoApp-mt-1" container justify="center">
			<Grid item xs={12} md={8} lg={6}>
				<TodoInput />
				<TodoList />
			</Grid>
		</Grid>
	)
}

export default TodoApp
