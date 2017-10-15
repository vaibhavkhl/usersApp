'use strict';


angular.module('usersApp')
  .controller('AddCtrl', function ($scope, $localStorage) {

    $scope.$storage = $localStorage;
    
    $scope.add = function(user) {
      $scope.$storage.users.push(user)
    }
  });
