import angular from 'angular'

const ngModule = angular.module("login",[]);

ngModule.config(function($stateProvider){
    $stateProvider.state("app.login",{

        url : "/login",
        views:{
            "main@":{
                template : require("./login.tmpl.html"),
                controller : "LoginCtrl as loginCtrl"
            }
        }

    })
})
.controller("LoginCtrl" , function($state){
    var loginCtrl = this;
})
