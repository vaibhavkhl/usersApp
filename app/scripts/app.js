'use strict';

/**
 * @ngdoc overview
 * @name usersApp
 * @description
 * # usersApp
 *
 * Main module of the application.
 */
angular
  .module('usersApp', [
    'ngMessages',
    'ui.router',
    'ngStorage'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
      })
      .state('addUser', {
        url: '/users/add',
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
      });

    $urlRouterProvider.otherwise('/users');

  });
