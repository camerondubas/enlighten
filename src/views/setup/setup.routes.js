'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('setup', {
      url: '/setup',
      template: require('./setup.html'),
      controller: 'setupCtrl',
      controllerAs: 'setupCtrl'
    });
}
