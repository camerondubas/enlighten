'use strict';
import './style/style.scss';

import * as angular from 'angular';
import uiRouter from 'ui-router';
import ngResource from 'angular-resource';


import routes from './app.routes';

import landingPage from './views/landing';
import setupPage from './views/setup';

angular.module('app',
  [
    uiRouter,
    ngResource,

    landingPage,
    setupPage
  ])
  .config(routes);
