var path = require('path')
var users = require('./../controllers/users.js')
var questions = require('./../controllers/questions.js')
var answers = require('./../controllers/answers.js')

module.exports = function(app){
	app.post('/login', function(req, res){
		users.login(req, res)
	})
	app.get('/checkUser', function(req, res){
		users.checkUser(req, res)
	})
	app.get('/logout', function(req, res){
		users.logout(req, res)
	})
	app.post('/newquestion', function(req, res){
		questions.newQuestion(req, res)
	})
	app.get('/getquestions', function(req, res){
		questions.getQuestions(req, res)
	})
	app.get('/getquestion/:id', function(req, res){
		questions.getQuestion(req, res)
	})
	app.post('/newanswer', function(req, res){
		answers.newAnswer(req, res)
	})
	app.get('/getanswers/:id', function(req, res){
		answers.getAnswers(req, res)
	})
	app.put('/like/:id', function(req, res){
		answers.like(req, res)
	})

}