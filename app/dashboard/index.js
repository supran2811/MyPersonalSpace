

import angular from 'angular';
import registerItemList from './itemlist';
import registerItemDetails from './itemlist/itemdetails';
// import registerItems from './item';

import './index.scss';
import './itemlist/itemdetails/create';

const ngModule = angular.module('dashboard', [
    'app.model.user',
    'CreateItem'
]);

registerItemList(ngModule);
registerItemDetails(ngModule);
// registerItems(ngModule);

ngModule.config(function ($stateProvider) {

    $stateProvider.state("app.dashboard", {
        url: "/dashboard",
        views: {
            "main@": {
                template: require('./dashboard.tmpl.html'),
                controller: "DashboardCtrl as dashboardCtrl"
            }
        }


    });

})
    .controller("DashboardCtrl", function ($state, UserModel) {

        var dashboardCtrl = this;
        var selectedEntry = {};

        

        dashboardCtrl.user = UserModel.getLoggedinUser();

        !dashboardCtrl.user && $state.go('app.welcome');

        dashboardCtrl.logOut = function () {

            UserModel.logout();
            $state.go('app.login');
        }
    });
