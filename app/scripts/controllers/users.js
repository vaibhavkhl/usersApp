'use strict';


angular.module('usersApp')
  .controller('UsersCtrl', function ($scope, $localStorage) {
    $scope.$localStorage = $localStorage;
    $scope.sortByHighToLow = true;

    if (!$scope.$localStorage.users) {
      $scope.$localStorage.users = []
    }

    getUsers();

    function getUsers() {
      $scope.users = $localStorage.users;
    }

    function sortUsers() {
      var users = $scope.users

      users.sort(function(a, b) {
        if ($scope.sortByHighToLow) {
          return Number(a.salary) - Number(b.salary)
        } else {
          return Number(b.salary) - Number(a.salary)
        }
      });

      $localStorage.users = users;
      getUsers();
    }

    $scope.toggleSort = function() {
      $scope.sortByHighToLow = !$scope.sortByHighToLow;
      sortUsers();
    }

    $scope.removeUser = function(id) {
      var users = $scope.users
      var index = users.findIndex(function(user) {
        return user.id == id
      });

      users.splice(index, 1);

      $scope.$localStorage.users = users;
      getUsers();
    }
  });
