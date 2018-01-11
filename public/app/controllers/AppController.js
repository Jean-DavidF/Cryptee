function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.currencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });

    var AllCurrenciesInterval = setInterval(function(){
        if ('/dashboard' === $location.path()) {
            currenciesFactory.getCurrencies(function(data) {
                $scope.currencies = data;
            });
        } else {
            clearInterval(AllCurrenciesInterval);
        }
    }, 60000);

    $scope.viewCurrency = function(Id) {
        $state.go('currency', {CoinId : Id});
    };
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', '$state', AppController]);