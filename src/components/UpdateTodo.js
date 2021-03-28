import { TextField } from "@material-ui/core"
import useInputState from "../react-hooks/useInputState"
import "./UpdateTodo.css"

function UpdateTodo({ id, task, handleToggleState, update }) {
	const [value, handleChange] = useInputState(task)
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				update(value, id)
				handleToggleState()
			}}
			onMouseOut={e => {
				setTimeout(() => {
					handleToggleState()
				}, 1000)
			}}
			className="UpdateTodo-margin">
			<TextField value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	)
}

export default UpdateTodo
