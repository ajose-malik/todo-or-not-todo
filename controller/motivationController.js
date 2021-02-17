const express = require("express");
const router = express.Router();
const Motivation = require("../model/motivationModel");

router.get("/", (req, res) => {
	Motivation.find({}, (err, data) => {
		res.json(data);
	});
});

router.post("/", (req, res) => {
	Motivation.create(req.body, (err, done) => {
		Motivation.find({}, (err, data) => {
			res.json(data);
		});
	});
});

module.exports = router;
