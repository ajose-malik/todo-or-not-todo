const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
app.use(cors());
const { PORT } = process.env || 3001;
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
	console.log(`STARTED PORT ${PORT}`);
});

const motivationController = require("./controller/motivationController");
app.use("/motivation", motivationController);

//connect Mongo
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
