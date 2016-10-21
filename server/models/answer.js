var mongoose = require('mongoose');
var Schema = mongoose.Schema
var AnswerSchema = new Schema({
	username: String,
	description: String,
	details: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	created_at: { type: Date, default: Date.now },
	like: Number,
})
mongoose.model('Answer', AnswerSchema)