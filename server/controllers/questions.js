var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')
var User = mongoose.model('User')
module.exports = (function(){
	return{
			newQuestion: function(req, res){
				console.log(req.body._user)
				var question = new Question(req.body)
				question.save(function (err, question){
					if(err){
						console.log(err)
					}
					else{
						res.json(question)
					}
				})
			},
			getQuestions: function(req, res){
				Question.find(function(err, questions){
					if(err){
						console.log(err)
					}
					else{
						res.json(questions)
					}
				})
			},
			getQuestion: function(req, res){
				Question.find({_id: req.params.id}, function(err , question){
					if (err){
						console.log(err)
					}
					else{
						res.json(question)
					}
				})
			}






}	
})(); //immediately invoked