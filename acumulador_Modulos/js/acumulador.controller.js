
angular.module("appMain")
.controller("acumulador.controller)", ['$scope',function($scope){

    $scope.total = 0;
    $scope.incremento = 0; 

    $scope.mas=function(){
        $scope.incremento = total + $scope.incremento;
    }

    $scope.mmenos=function(){
        $scope.incremento = total - $scope.incremento;
    }
}])