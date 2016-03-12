'use strict';

// Local
import routes from './do-it-yourself.routes';
import diyCtrl from './do-it-yourself.controller';


export default angular.module('app.diy', [])
  .config(routes)
  .controller('diyCtrl', diyCtrl)
  .name;
