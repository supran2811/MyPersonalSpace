import angular from 'angular';
import bootstrap from "!style!css!less!bootstrap/less/bootstrap.less";
import  'angular-ui-router';
import './welcome';
import './index.less';

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