app.controller('userController', ['$scope', 'userFactory', "$location", '$routeParams', function($scope, userFactory, $location, $routeParams){
	
	//login fuction with a basic validation 
	$scope.login = function(){
		if(!$scope.logReg||$scope.logReg.name.length < 2){
			alert('name is not at least 2 characters');
		}
		else {
			userFactory.login($scope.logReg);
			
		}
	}




}]);