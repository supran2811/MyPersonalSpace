import angular from 'angular';

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
    .state('app.register.sucess',{
        url:"/sucess",
        views:{
            'main@':{
                template:require('./register.sucess.tmpl.html'),
                controller : "SucessCtrl as sucessCtrl"
            }
        }
    })
    .state('app.register.error',{
        url:"/error",
        views:{
            'main@':{
                template:require('./register.error.tmpl.html'),
                controller : "ErrorCtrl as errorCtrl"
            }
        }
    })

})
.controller('RegisterCtrl' , function(UserModel,$state){
    //console.log(this);
    var registerCtrl = this;
    // console.log(registerCtrl);
   // registerCtrl.user = {firstname:""};

    registerCtrl.register  = function(user){

            UserModel.register(user).then(function(data){
                console.log(data);

                if(data === 200){
                    $state.go('app.register.sucess');

                } 
                else{   $state.go('app.register.error');}
                     
            },function(error){
                console.log("No!!!");
                $state.go('app.register.error');
            });

    }
})
.controller('SucessCtrl',function(){
    var sucessCtrl = this;
    sucessCtrl.message = "Thanks for register!";
})
.controller('ErrorCtrl',function(){
    var errorCtrl = this;
    errorCtrl.message = "Error in register";
})
