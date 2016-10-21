app.controller('dashboardController', ['$scope', 'userFactory','questionFactory', "$location", function($scope, userFactory, questionFactory, $location){

	questionFactory.getQuestions(function(returnedQuestions){
		$scope.questions = returnedQuestions;
	})

		// checks to see if user is in session if not redirects them to login
	userFactory.checkUser(function(data){
		$scope.currentUser = data.user;
		if(!$scope.currentUser){
			$location.url('/')
		}
	})

	}]);