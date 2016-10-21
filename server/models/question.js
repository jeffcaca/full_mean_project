var mongoose = require('mongoose');
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
	username: String,
	questionname: String,
	description: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	answers: Number,
	created_at: { type: Date, default: Date.now }
})
mongoose.model('Question', QuestionSchema)