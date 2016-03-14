'use strict';

// Local
import routes from './setup.routes';
import setupCtrl from './setup.controller';


export default angular.module('app.setup', [])
  .config(routes)
  .controller('setupCtrl', setupCtrl)
  .name;
