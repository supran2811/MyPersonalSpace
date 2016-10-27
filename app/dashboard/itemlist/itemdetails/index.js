
export default ngModule => {


    ngModule.controller('ItemDetailsCtrl',function(){

    })
    .directive('itemDetails',function(){

        return {

            restrict : 'AE',
            template : require('./itemdetails.tmpl.html'),
            controller : 'ItemDetailsCtrl',
            controllerAs : 'itemDetailsCtrl'
        }
    })
}