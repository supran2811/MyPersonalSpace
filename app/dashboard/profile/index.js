
export default ngModule => {

ngModule.controller("ProfileCtrl", function(){
        
})
.directive("profileInfo" , function(){

    return (
        {
            restrict : 'AE',
            template : require("./profile.tmpl.html"),
            controller : "ProfileCtrl",
            controllerAs: "profileCtrl"
        }
    );
})

}
 