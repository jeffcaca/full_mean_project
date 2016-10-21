app.factory('userFactory', ["$http", "$location", function($http, $location){
	var factory={}
	factory.login = function(user){
		$http.post('/login', user).then(function(data){
			if(data.data.status){
				$location.url('/dashboard')
			}
			else{
				console.log("ERROR")
			}
		})
	}

	factory.checkUser = function(callback){
		$http.get('/checkUser').then(function(data){

			
			callback(data.data)
		})
	}

	return factory;
}])