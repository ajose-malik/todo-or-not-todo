import axios from "axios";

let motivationBox = [];

const rand = () => Math.floor(Math.random() * motivationBox.length - 1);

const getMotivation = () => {
	const motivation = motivationBox[rand()];
	if (motivation) {
		return motivation.motivation;
	}
	return "Yes you can!!!";
};

const fetchMotivation = () => {
	axios
		.get("http://localhost:3000/motivation")
		.then(res => {
			return (motivationBox = res.data);
		})
		.then(() => getMotivation());
};

const addMotivation = newMotivation => {
	axios.post("http://localhost:3000/motivation", newMotivation).then(res => {
		fetchMotivation();
	});
};

const motivationsReducer = (state = getMotivation(), action) => {
	switch (action.type) {
		case "ADD_MOTIVATION":
			addMotivation({ motivation: action.newMotivation });
			return state;

		case "GET_MOTIVATION":
			if (motivationBox.length === 0) {
				fetchMotivation();
			} else {
				getMotivation();
			}
			return state;

		default:
			return state;
	}
};

export default motivationsReducer;
