

import angular from 'angular';
import registerProfile from './profile';
import registerNotes from './notes';

require('./notes/create');

const ngModule = angular.module('dashboard' ,[
    'app.model.user'
]);


registerProfile(ngModule);
registerNotes(ngModule);

ngModule.config(function($stateProvider){

    $stateProvider.state("app.dashboard" ,{
        url : "/",
        views:{
            "main@":{
                template: require('./dashboard.tmpl.html'),
                controller : "DashboardCtrl as dashboardCtrl"
            }
        }
        
        
    });
        
})
.controller("DashboardCtrl" ,function(UserModel){

    var dashboardCtrl = this;
    
    dashboardCtrl.user = UserModel.getLoggedinUser();


});
