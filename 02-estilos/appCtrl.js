angular.module("appMain")
.controller("AppCtrl", ['$scope',function($scope){

    this.user = {
        name:'Pepe',
        apellidos: 'Pérez', 
    } 
    
    this.curso='AngularJS';   

    this.borrar=function(){
        this.user.name='';
        console.dir(this);
    }
}])
