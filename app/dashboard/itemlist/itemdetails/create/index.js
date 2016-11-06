import angular from 'angular';


angular.module('CreateItem', [
    'app.entrydata',
    'app.model.user'
])

    .config(function ($stateProvider) {

        $stateProvider.state('app.dashboard.create', {
            url: '/create',

            template: require('./item-create.tmpl.html'),
            controller : 'CreateItemCtrl as createItemCtrl'
        })
    })
    .controller('CreateItemCtrl',function($scope,$state , UserModel,EntryData){
        var createItemCtrl = this;
        
        createItemCtrl.entry = {name:"" , noteid:""  , notepwd:"",username:UserModel.getLoggedInUserName()};

        createItemCtrl.create = function (entry){
            EntryData.create(entry).then(function(data){
                console.log(data);
                $scope.$emit('NewEntryAdded',data);
                $state.go('app.dashboard');
            },function(error){
                
            });
        }

    })