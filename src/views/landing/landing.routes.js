'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      template: require('./landing.html'),
      controller: 'landingCtrl',
      controllerAs: 'landingCtrl'
    });
}
