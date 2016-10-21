var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')
var User = mongoose.model('User')
module.exports = (function(){
	return{
			newAnswer: function(req, res){
				var answer = new Answer(req.body)
				answer.save(function(err){
					if(err){
						console.log(err)
					}
					else{
							Question.findOne({_id: req.body._question}, function(err, question){
								if (err){
										console.log(err)
								}
								else{
									question.answers +=1;
									question.save(function(err, question){
										if(err){
											console.log(err)
										}
										else{
											res.json(question)
										}
									})
								}

							})
					}
				})
			
			},
				getAnswers: function(req, res){
				Answer.find({_question: req.params.id}, function(err, answers){
					if(err){
						console.log(err)
					}
					else{
						res.json(answers)
					}
				})
			},
				like: function(req, res){
					Answer.findOne({_id: req.params.id}, function(err, answer){
						if (err){
							console.log(err)
						}
						else{
							answer.like += 1
							answer.save(function(err, answer){
								if (err){
									console.log(err)
								}
								else{
									res.json(answer)
								}
							})
						}
					})
				}
			





}	
})(); //immediately invoked