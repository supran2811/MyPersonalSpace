

import angular from 'angular';
import registerItemList from './itemlist';
import registerItemDetails from './itemlist/itemdetails';


const ngModule = angular.module('dashboard' ,[
    'app.model.user'
]);

registerItemList(ngModule);
registerItemDetails(ngModule);

ngModule.config(function($stateProvider){

    $stateProvider.state("app.dashboard" ,{
        url : "/dashboard",
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
