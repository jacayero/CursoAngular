angular.module("appMain",[])

angular.module("appMain")
.controller("AppCtrl", ['$scope',function($scope){

    $scope.user = {
        name:'Pepe',
        apellidos: 'Pérez', 
    } 
    
    $scope.curso='AngularJS';   

    $scope.borrar=function(){
        $scope.user.name='';
        console.dir($scope);
    }
}])

