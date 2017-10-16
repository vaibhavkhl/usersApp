'use strict';


angular.module('usersApp')
  .controller('AddCtrl', function ($scope, $localStorage, $state) {

    $scope.$storage = $localStorage;

    $scope.add = function(user) {
      user.id = Date.now()
      $scope.$storage.users.push(user)
      console.log($scope.$storage.users)

      $state.go('userDetail', {id: $scope.user.id});
    }
  });
