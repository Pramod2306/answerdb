const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
	{
		ip: String,
		device: Object,
		client:Object,
		os:Object
	},
	{
        timestamps:true
	},
);

module.exports = mongoose.model("User", UserSchema);