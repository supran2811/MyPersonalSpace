import angular from 'angular';
import '../dashboard';

const ngModule = angular.module("login",[
     'dashboard'
]);

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
.controller("LoginCtrl" , function($state,UserModel){
    var loginCtrl = this;
    loginCtrl.user = {username:"" , password:""};

    loginCtrl.login  = function(user){
        console.log(user);
        UserModel.login(user).then(function(record){
                UserModel.setLoggedInUser(record.data); 
                $state.go('app.dashboard');       
        },function(error){
                console.log(error);
        });
    }
})
