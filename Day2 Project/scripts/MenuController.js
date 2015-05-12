hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList=[
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "DemoMath",
            url: "demomath.html"
        }
    ];

}]);