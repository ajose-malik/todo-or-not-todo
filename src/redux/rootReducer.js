import { combineReducers } from "redux";
import todosReducer from "../reducers/todosReducer";
import motivationsReducer from "../reducers/motivationsReducer";

export default combineReducers({
	todos: todosReducer,
	motivation: motivationsReducer
});
