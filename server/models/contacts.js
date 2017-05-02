var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number, required: true},
	status: {type: String, required: true},
	},{timestamps:true})
var Contact = mongoose.model('Contact', ContactSchema); 

