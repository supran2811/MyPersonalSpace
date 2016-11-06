export default ngModule => {
    ngModule.controller('ItemListCtrl', function ($scope,UserModel, EntryData) {
        var itemListCtrl = this;
        var selectedEntry = {};
        itemListCtrl.entries = [];

        itemListCtrl.getAllNotes = function (username) {
            EntryData.findByUserName(username).then(function (data) {
                console.log(data);
                itemListCtrl.entries = data;
                selectedEntry = data[0];
                $scope.$emit('SelectedNote',selectedEntry);    
            }, function (error) {
                console.log(error);
            })
        };

        itemListCtrl.setSelectedNote = function(entry){
            $scope.$emit('SelectedNote',entry);
        }

        $scope.$on('NewEntryAdded',function(e,data){
          //  console.log('New data added for item list');
            console.log(data);
            itemListCtrl.entries.push(data);

            selectedEntry = data;
            // $scope.$apply();
            $scope.$emit('SelectedNote',selectedEntry);
            
        })

       
        var username = UserModel.getLoggedInUserName();
        itemListCtrl.getAllNotes(username);



        //itemListCtrl.getAllNotes = function()
    })
        .directive('itemList', function () {
            return {
                restrict: 'AE',
               
                template: require('./itemlist.tmpl.html'),
                controller: 'ItemListCtrl',
                controllerAs: 'itemListCtrl'
            }
        })
}