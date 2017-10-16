'use strict';

angular.module('usersApp')
  .controller('EditCtrl', function ($scope, $localStorage, $state, $stateParams) {

    $scope.$storage = $localStorage;

    function getUser() {
      var users = $localStorage.users;
      return users.find(function(user) {
        return user.id == $stateParams.id;
      });
    }

    $scope.user = getUser();

    $scope.update = function() {
      var users = $localStorage.users;
      var index = users.findIndex(function(user) {
        return user.id == $scope.user.id;
      });

      users[index] = $scope.user;
      $localStorage.users = users;
      $state.go('userDetail', {id: $scope.user.id});
    }

    $scope.removeUser = function(id) {
      var users = $localStorage.users;
      var index = users.findIndex(function(user) {
        return user.id == id
      });

      users.splice(index, 1);

      $localStorage.users = users;
      $state.go('users')
    }

  });
