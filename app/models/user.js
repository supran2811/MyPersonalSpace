angular.module("app.model.user" , [])
.service('UserModel',function($http,$q){
    var model = this,
    loggedInUser = undefined;

    model.register = function(user){
        console.log("Inside register");
        console.log(user);

        var defered = $q.defer();


        $http.post('http://localhost:1337/user/register',user).then(function(data){
            defered.resolve(data.status);
        },function(error){
            defered.reject(error);
        });

        return defered.promise;
    }

   model.login = function(user){
        console.log("Inside login");
        console.log(user);
        var defered = $q.defer();

        $http.post('http://localhost:1337/user/login',user).then(function(data){
                defered.resolve(data);
        },function(error){
            defered.reject(error);
        });

        return defered.promise;
        
   }

   model.logout = function(){
       loggedInUser = undefined;
   }

   model.setLoggedInUser = function(user){
        console.log(user);
        loggedInUser = user;
   }

   model.getLoggedinUser = function(){
       return loggedInUser;
   }
   model.getLoggedInUserName = function(){
       return loggedInUser? loggedInUser['username']:'';
   }
})