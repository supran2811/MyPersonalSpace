angular.module("app.model.user" , [])
.service('UserModel',function($http){
    var model = this;


    model.register = function(user){
        console.log("Inside register");
        console.log(user);
        $http.post('http://localhost:1337/user',user).then(function(data){
                console.log('sucess');
                console.log(data);
        },function(error){
            console.log(error);
        })
    }

})