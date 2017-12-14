function AppController($scope, currenciesFactory, $location, $http) {
    $scope.formData = {};
    $scope.currencies = [ ];

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data.Data;
        console.log($scope.currencies);
    });
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', AppController]);