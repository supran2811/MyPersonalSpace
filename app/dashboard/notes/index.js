import angular from 'angular';


angular.module("notes" , [


])
.directive("userNotes" , function(){

    return (
        {
            restrict : 'A',
            templateUrl  : require('./notes.tmpl.html')
        }
    );
}) 