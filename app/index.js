const angular = require('angular');

require('angular-ui-router');
require('./dashboard');
const ngModule = angular.module('App' , [
        'ui.router',
        'dashboard'
]);


ngModule.config(function($stateProvider,$urlRouterProvider){

        $stateProvider.state("app" ,{
            url : "",
            abstract:true
        });


        $urlRouterProvider.otherwise("/");
})