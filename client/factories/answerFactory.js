app.factory('answerFactory', ["$http", "$location", function($http, $location){
	var factory={}
			factory.newAnswer = function(answer, callback){
			$http.post('/newanswer', answer).then(function(returnedAnswer){
				callback(returnedAnswer.data)
			})
		}
			factory.getAnswers = function(questionid, callback){
			$http.get('/getanswers/' + questionid).then(function(returnedAnswers){
				callback(returnedAnswers.data)
			})
		}
			factory.like = function(id, callback){
				$http.put('/like/' + id).then(function(returnedLike){
					callback(returnedLike.data)
				})
			}

		return factory;
}])