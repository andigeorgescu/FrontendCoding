hrApp.controller('MathController', ['$scope','MathService', function($scope, createService){
    
   /* $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
            $scope.op1=$scope.no1+$scope.no2;
            $scope.op2=$scope.no1-$scope.no2;
            $scope.op3=$scope.no1*$scope.no2;
            $scope.op4=$scope.no1/$scope.no2;

//        TODO #13 refactor your calculations using MathService
    }*/
    $scope.calculate = function() {
        $scope.op1=createService.add($scope.no1,$scope.no2);
        $scope.op2=createService.substract($scope.no1,$scope.no2);
        $scope.op3=createService.multiply($scope.no1,$scope.no2);
        $scope.op4=createService.divide($scope.no1,$scope.no2);


    }
}]);
