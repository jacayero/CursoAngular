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

(function() {
    'use strict';

    angular
        .module('Module')
        .controller('ControllerController', ControllerController);

    ControllerController.$inject = ['dependency1'];
    function ControllerController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();