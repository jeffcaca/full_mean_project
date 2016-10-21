app.factory('questionFactory', ["$http", "$location", function($http, $location){
	var factory={}
		factory.newQuestion = function(question, callback){
			
			$http.post('/newquestion', question).then(function(returnedQuestion){
				callback(returnedQuestion.data)
			})
		}
		factory.getQuestions = function(callback){
			$http.get('/getquestions').then(function(returnedQuestion){
				callback(returnedQuestion.data)
			})
		}
		factory.getQuestion = function(id, callback){
			$http.get('/getquestion/' + id).then(function(returnedQuestion){
				callback(returnedQuestion.data)
			})
		}
	return factory;
}])