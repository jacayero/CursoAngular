angular.module("appMain",[]).directive('appPie',function(){
    
    return  {
        template : `
        <footer>
        
                <b> {{$ctrl.autor}   Juan A. Cayero  Indra Software Labs 2017 </b>
        
        </footer> `, 
        restrict : 'AE'

    }
 })