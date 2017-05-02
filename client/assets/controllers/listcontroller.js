app.controller('listcontroller', ['$scope', 'contactsfactory','$location', '$route',
    function ($scope, contactsfactory,$location, $route){

    	contactsfactory.index(function(contacts){
    		$scope.contacts =contacts;
    	})
		
		$scope.newContact = function(){
			$location.url('/new');
		}

		$scope.deleteContact = function(id){
		  contactsfactory.delete(id, function(){
		  	$route.reload();
		  });
		}

		$scope.updateContact = function(id){
			$location.url('/edit/'+id);
		}

		$scope.showContact = function(id){
			$location.url('/show/'+id);
		}


}])