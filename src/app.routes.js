'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/');
}
