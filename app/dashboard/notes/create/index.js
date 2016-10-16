
//alert("Cming to create note");
import angular from 'angular';

const ngModule = angular.module('notes.create' , []);

ngModule.config(function($stateProvider){

    $stateProvider.state("app.notes.create" , {
        url : "/create",
        views:{
            "main@":{
                   template: require("./note-create.tmpl.html") 
            }     
        }
        
    })
})


