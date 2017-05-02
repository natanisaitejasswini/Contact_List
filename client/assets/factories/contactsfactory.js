app.factory('contactsfactory', ['$http', function($http){
  var factory = {};

  // new_contact is nothing but $scope.frienInfo
  // Here data.data.contact is nothing but object from db
  factory.create = function(new_contact,callback){
    $http.post('/contacts',new_contact).then(function(data){
      var message = '';
      var err = false;
      if (data.data.placeholder == 'error'){
          err = true;
          message = data.data.message;
      }
      if (typeof(callback) == 'function'){
          callback(err, data.data.contact, message);
      }
    })
  }
  factory.index = function(callback){
    $http.get('/contacts').then(function(data){
      callback(data.data.contacts);
    })
  }

  factory.delete = function(id, callback){
    $http.delete('/contacts/'+id).then(function(data){
      callback(data.data.contact);
    })
  }

  factory.show = function(id,callback){
    $http.get('/contacts/'+id).then(function(data){
      callback(data.data.contact);
    })
  }

  factory.edit = function(edit_contact,callback){
    $http.put('/contacts/'+edit_contact._id, edit_contact).then(function(data){
      callback(data.data.contact);
    })
  }
  return factory;
}]);