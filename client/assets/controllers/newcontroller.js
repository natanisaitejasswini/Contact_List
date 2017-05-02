app.controller('newcontroller', ['$scope', 'contactsfactory','$location', '$route',
    function ($scope, contactsfactory,$location, $route){

		$scope.createContact = function(){
			contactsfactory.create($scope.contactInfo,function(err, user, message){
				if(!$scope.contactInfo){
					return;
				}
				if (err){
			        $scope.register_message = message;
			    } else {
			        $scope.contactInfo = {};
					$location.url('/')
			    }
			})
		}
		$scope.goBack = function(){
			$location.url('/');
		}


}])