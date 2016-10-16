import angular from 'angular';
import "./index.less";
import '../models/user'
var ngModule = angular.module('register',[
    'app.model.user'
]);

ngModule.config(function($stateProvider){

    $stateProvider.state('app.register',{

        url : "/signup",
        views : {

            "main@":{
                template : require('./register.tmpl.html'),
                controller : "RegisterCtrl as registerCtrl"
                
            }
        }
    })
})
.controller('RegisterCtrl' , function(UserModel){
    //console.log(this);
    var registerCtrl = this;
    // console.log(registerCtrl);
   // registerCtrl.user = {firstname:""};

    registerCtrl.register  = UserModel.register;
});