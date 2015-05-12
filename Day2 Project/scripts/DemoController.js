hrApp.controller('DemoController', ['$scope', '$rootScope',function($scope, $rootScope) {


    $scope.sumMath = function() {
        $scope.rezultatSum = $scope.firstNumber*1 + $scope.secondNumber*1;
    };
    $scope.subMath = function() {
        $scope.rezultatSub = $scope.firstNumber*1 - $scope.secondNumber*1;
    };
    $scope.multMath = function() {
        $scope.rezultatMult = $scope.firstNumber*1 * $scope.secondNumber*1;
    };
    $scope.divMath = function() {
        $scope.rezultatDiv = $scope.firstNumber*1 / $scope.secondNumber*1;
    };

}]);