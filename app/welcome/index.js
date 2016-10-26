import angular from 'angular';

import "../login";
import "../register";


var ngModule = angular.module('welcome',['login' ,'register']);

ngModule.config(function($stateProvider){

    $stateProvider.state('app.welcome',{

        url : "/welcome",
        views : {

            "main@":{
                template : require('./welcome.tmpl.html')
            }
        }
    })
})