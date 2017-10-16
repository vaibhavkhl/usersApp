'use strict';


angular.module('usersApp')
  .controller('UsersCtrl', function ($scope, $localStorage) {
    $scope.$localStorage = $localStorage;
    $scope.sortByHighToLow = true;

    if (!$localStorage.users) {
      $localStorage.users = []
    }

    $scope.filterUsers = function() {
      if($scope.filterOption) {
        var users = getUsers();

        var filteredUsers = users.filter(function(user) {
          return user.department == $scope.filterOption;
        })

        $scope.users = filteredUsers
      } else {
        setUsers();
      }
    }

    sortUsers();
    setUsers();

    function setUsers() {
      $scope.users = $localStorage.users;
    }

    function getUsers() {
      return $localStorage.users;
    }


    function sortUsers() {
      var users = getUsers();

      users.sort(function(a, b) {
        if ($scope.sortByHighToLow) {
          return Number(b.salary) - Number(a.salary)
        } else {
          return Number(a.salary) - Number(b.salary)
        }
      });

      $localStorage.users = users;
      $scope.filterUsers();
    }

    $scope.toggleSort = function() {
      $scope.sortByHighToLow = !$scope.sortByHighToLow;
      sortUsers();
    }


    $scope.removeUser = function(id) {
      var users = getUsers();
      var index = users.findIndex(function(user) {
        return user.id == id
      });

      users.splice(index, 1);

      $localStorage.users = users;
      setUsers();
    }


  });
