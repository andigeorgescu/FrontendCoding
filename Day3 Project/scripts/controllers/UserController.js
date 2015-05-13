hrApp.controller('UserController', ['$scope','$location',
    function($scope,$location) {

        $scope.back = function() {

            $location.url("/");
        };
        $scope.reset = function() {

            $scope.firstName="";
            $scope.lastName="";
            $scope.id=null;
            $scope.age=null;
        };

}]);

