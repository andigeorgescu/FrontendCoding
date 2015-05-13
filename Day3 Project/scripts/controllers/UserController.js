hrApp.controller('UserController', ['$scope','$location','userService',
    function($scope,$location,userService) {

        $scope.back = function() {

            $location.url("/");
        };
        $scope.reset = function() {

            $scope.firstName="";
            $scope.lastName="";
            $scope.id=undefined;
            $scope.age=null;
        };
        $scope.contacts = userService.list();

        $scope.save = function () {
            userService.save($scope.contact);
            $scope.contact = {};
        }

        $scope.val=false;
        $scope.show = function () {
            if($scope.val!=true) $scope.val=true;
                else $scope.val=false;
        }

}]);

