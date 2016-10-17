angular.module("app.model.user" , [])
.service('UserModel',function($http,$q){
    var model = this;


    model.add = function(user){
        console.log("Inside register");
        console.log(user);

        var defered = $q.defer();


        $http.post('http://localhost:1337/user',user).then(function(data){
            defered.resolve(data.status);
        },function(error){
            defered.reject(error);
        });

        return defered.promise;
    }

})