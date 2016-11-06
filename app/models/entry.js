angular.module('app.entrydata',[])
.service('EntryData', function($http , $q){

    var model = this,
    selectedEntry = {};

    model.create  = function(entry){
        console.log("Inside create");
        console.log(entry);

        var defered = $q.defer();


        $http.post('http://localhost:1337/notes/add',entry).then(function(entryadded){
            
        defered.resolve(entryadded.data);
        },function(error){
            defered.reject(error);
        });

        return defered.promise;
    }

    model.findByUserName = function(username){

        console.log('Inside find');

        var defered = $q.defer();

        var url = 'http://localhost:1337/notes/list?username='+username;
        $http.get(url).then(function(entries){
            
          //  console.log(entries.data);
            selectedEntry = entries.data > 0 ? entries.data[0]:{};
            defered.resolve(entries.data);
        },function(error){
            console.log(error);
            defered.reject(error);
        });

        return defered.promise;

    }

    model.setSelectedEntry = function(entry){
        console.log(entry);
        selectedEntry = entry;
    }

    model.getSelectedEntry = function(){
        return selectedEntry;
    }
})