'use strict';

// Local
import routes from './landing.routes';
import landingCtrl from './landing.controller';


export default angular.module('app.landing', [])
  .config(routes)
  .controller('landingCtrl', landingCtrl)
  .name;
