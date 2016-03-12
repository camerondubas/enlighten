'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('diy', {
      url: '/do-it-yourself',
      template: require('./do-it-yourself.html'),
      controller: 'diyCtrl',
      controllerAs: 'diyCtrl'
    });
}
