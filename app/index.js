import angular from 'angular';
//import 'bootstrap-sass';
//import bootstrap from "!style!css!scss!bootstrap-sass/assets/stylesheets/bootstrap";
import  'angular-ui-router';
import './welcome';

import '!style!css!sass!./index.scss';

const ngModule = angular.module('App' , [
        'ui.router',
        'welcome'
]);


ngModule.config(function($stateProvider,$urlRouterProvider){

        $stateProvider.state("app" ,{
            url : "",
            abstract:true
        });

       $urlRouterProvider.otherwise("/welcome");
});