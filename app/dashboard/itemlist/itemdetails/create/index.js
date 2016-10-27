import angular from 'angular';

angular.module('CreateItem', [])

    .config(function ($stateProvider) {

        $stateProvider.state('app.dashboard.create', {
            url: '/create',

            template: require('./item-create.tmpl.html'),
            controller : 'CreateItemCtrl as createItemCtrl'



        })
    })
    .controller('CreateItemCtrl',function($state){
        createItemCtrl = this;
        createItemCtrl.hideItemDetails = true;
    })