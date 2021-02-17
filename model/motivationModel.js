const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
	motivation: String
});

const Motivation = mongoose.model("motivation", motivationSchema);

module.exports = Motivation;
