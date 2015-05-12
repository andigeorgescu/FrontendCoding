
hrApp.controller('DescriptionController', ['$scope', function($scope) {

    $scope.title = 'Two Way Binding Demo';

    console.log("Description controller was initialized!");

    $scope.myVal="My description controller";
    $scope.descriptionShow=false;
    $scope.toggleDescriptionShow = function() {
         if($scope.descriptionShow==true)
            $scope.descriptionShow=false;
        else
             $scope.descriptionShow=true;

    };

}]);