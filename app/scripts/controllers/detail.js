'use strict';

angular.module('usersApp')
  .controller('DetailCtrl', function ($scope, $localStorage, $state, $stateParams) {

    $scope.$storage = $localStorage;

    function getUser() {
      var users = $localStorage.users;
      return users.find(function(user) {
        return user.id == $stateParams.id;
      });
    }

    $scope.user = getUser();

  });
