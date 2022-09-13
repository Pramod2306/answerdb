const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AnswerSchema = new Schema(
	{
		question: String,
		answer: String,
	},
	{
        timestamps:true
	},
);

module.exports = mongoose.model("Answer", AnswerSchema);
