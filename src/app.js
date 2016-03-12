'use strict';
import './style/style.scss';

import * as angular from 'angular';
import uiRouter from 'ui-router';

import routes from './app.routes';

import landingPage from './views/landing';
import doItYourselfPage from './views/do-it-yourself';

angular.module('app',
  [
    uiRouter,

    landingPage,
    doItYourselfPage
  ])
  .config(routes);
