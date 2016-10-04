


module.exports = function(ngModule){

ngModule.directive("profileInfo" , function(){

    return (
        {
            restrict : 'AE',
            template : require("./profile.tmpl.html")
        }
    );
})
}
 