hrApp.controller('MainController', ['$scope', '$rootScope','$timeout', function($scope, $rootScope,$timeout) {

    console.log("Hello world!");

    $scope.name="Valoarea din scope!";
    $scope.otherName="Other name!";

/*    $timeout(
        function(){
            console.log($rootScope);
        }, 10000
    );*/

    $scope.carList=[
        {
           type : 'car',
           model: 'VW GOLF'
        },
        {
            type: 'car',
            model : 'Ferrari'
        }
    ]

}]);