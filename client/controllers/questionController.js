app.controller('questionController', ['$scope', 'userFactory','questionFactory', "$location", '$routeParams', 'answerFactory', function($scope, userFactory, questionFactory, $location, $routeParams, answerFactory){

	questionFactory.getQuestion($routeParams.id, function(returnedQuestion){
		$scope.question = returnedQuestion
	})

	answerFactory.getAnswers($routeParams.id, function(returnedAnswers){
		$scope.answers = returnedAnswers;
	})

	$scope.newQuestion = function(){
		if(!$scope.newQ||$scope.newQ.questionname.length < 10){
			alert('name is not at least 10 characters');
		}
		else{
			$scope.newQ.username = $scope.currentUser.name
			$scope.newQ._user = $scope.currentUser._id
			$scope.newQ.answers = 0

			questionFactory.newQuestion($scope.newQ, function(returnedQ){
				$location.url('/dashboard/')
			})

		}
	}
		$scope.newAnswer = function(){
		if(!$scope.newAns||$scope.newAns.description.length < 5){
			alert('name is not at least 5 characters');
		}
		else{
			console.log($routeParams.id)
			$scope.newAns.username = $scope.currentUser.name
			$scope.newAns._user = $scope.currentUser._id
			$scope.newAns._question = $routeParams.id
			$scope.newAns.like = 0
			answerFactory.newAnswer($scope.newAns, function(returnedAns){
				$location.url('/dashboard/')
			})
		}
	}
	$scope.like = function(id){
		$scope.like = id
		answerFactory.like($scope.like, function(returnedLike){
			location.reload(true)
		})


	}




	userFactory.checkUser(function(data){
		$scope.currentUser = data.user;
		if(!$scope.currentUser){
			$location.url('/')
		}
	})

	}]);