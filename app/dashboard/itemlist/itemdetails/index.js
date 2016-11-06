
export default ngModule => {


    ngModule.controller('ItemDetailsCtrl',function($scope,EntryData){
        var itemDetailsCtrl = this;

        itemDetailsCtrl.entry = {};

        $scope.$on('NewData',function(e,data){
            console.log('New data added');
        });

        $scope.$on('SelectedNote',function(e,data){
            console.log(data);
            itemDetailsCtrl.entry = {id : data.id, name:data.name , noteid : data.noteid , pwd : data.notepwd };
        })

        // itemDetailsCtrl.entry  = EntryData.getSelectedEntry();

        // console.log(itemDetailsCtrl.entry);

       // itemDetailsCtrl.sharedVar  = dashboardCtrl.sharedVar;
    })
    .directive('itemDetails',function(){

        return {

            restrict : 'AE',
            require  : 'itemList',
            template : require('./itemdetails.tmpl.html'),
            controller : 'ItemDetailsCtrl',
            controllerAs : 'itemDetailsCtrl'
                    
        }
    })
}