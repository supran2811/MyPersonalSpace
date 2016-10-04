

const angular = require('angular');
require('angular-ui-router');


var ngModule = angular.module('dashboard' ,[
]);


require('./profile')(ngModule);

ngModule.config(function($stateProvider){

    $stateProvider.state("dashboard" ,{
        url : "/",
        template: require('./dashboard.tmpl.html')
        
    });
        
});
