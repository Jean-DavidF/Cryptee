function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.currencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });

    $scope.viewCurrency = function(Id) {
        $state.go('currency', {CoinId : Id});
    };
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', '$state', AppController]);