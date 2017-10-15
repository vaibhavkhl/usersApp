'use strict';


angular.module('usersApp')
  .controller('UsersCtrl', function ($scope, $localStorage) {
    $scope.$localStorage = $localStorage;

    if (!$scope.$localStorage.users) {
      $scope.$localStorage.users = []
    }

    $scope.users = $scope.$localStorage.users;
  });
