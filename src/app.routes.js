'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');
}
