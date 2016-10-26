export default ngModule => {
    ngModule.controller('ItemListCtrl',function(){

    })
    .directive('itemList',function(){
        return {
            restrict : 'AE',
            template : require('./itemlist.tmpl.html'),
            controller : 'ItemListCtrl',
            controllerAs : 'itemListCtrl'
        }
    })
}