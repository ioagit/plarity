'use strict';

/**
 * @ngdoc overview
 * @name plarityApp
 * @description
 * # plarityApp
 *
 * Main module of the application.
 */
angular.module('plarityApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.utils',

    //independent modules to be added to the app.
    //This modules should be self contained.
    'reconsole.components'

  ]);
