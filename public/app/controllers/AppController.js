function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.formData = {};
    $scope.currencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        angular.forEach(data.Data, function(element) {
            $scope.currencies.push(element);
        });
    });

    $scope.viewCurrency = function(Coin) {

        // Fix name of currency (url rewriting)
        var fixCoin = [];

        if (Coin) {
            for (var i = 0; i < Coin.length; i++) {
                fixCoin.push(Coin[i].replace(/\s+/g, '-').toLowerCase());
            }
            fixCoin = fixCoin.join('');
        }

        $state.go('currency', {CoinName : fixCoin});
    };
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http','$state', AppController]);