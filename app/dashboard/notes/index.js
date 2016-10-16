import angular from 'angular';

export default ngModule =>{
    ngModule.directive("userNotes" , function(){

    return (
        {
            restrict : 'A',
            template  : require('./notes.tmpl.html')
        }
    );
})
} 
 