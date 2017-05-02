app.controller('showcontroller', ['$scope', 'contactsfactory','$routeParams', '$location',
    function ($scope, contactsfactory,$routeParams, $location){
        
        contactsfactory.show($routeParams.id, function(contact){
            $scope.contactInfo = contact;
        })

        $scope.goBack = function(){
            $location.url('/');
        }
}])