app.controller('editcontroller', ['$scope', 'contactsfactory','$routeParams', '$location',
    function ($scope, contactsfactory,$routeParams, $location){
    	
    	contactsfactory.show($routeParams.id, function(contact){
    		$scope.contactInfo = contact;
    	})

		$scope.editContact = function(){
			contactsfactory.edit($scope.contactInfo,function(){
				if(!$scope.contactInfo){
					return;
				}
				$location.url('/')
			})
		}
}])