'use strict';

export default angular.module('app.demoDir', [])
  .directive('demoDir', () => {
    return {
      template: '<h1>Demo Dir</h1>',
      replace: true,
    };
  }).name;
