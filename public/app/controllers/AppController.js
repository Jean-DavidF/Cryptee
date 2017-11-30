function AppController($scope, currenciesFactory, $location) {
    $scope.newCurrency = {
        name: '',
        value: '',
    };

    $scope.toRemove = {
        currency: null,
        index: -1
    };

    $scope.currencies = [ ];

    $scope.currenciesFactory = currenciesFactory;

    // Permet de créer une Currency (devise) -> lié à la factory
    $scope.addCurrency = function() {
        currenciesFactory.create($scope.newCurrency.name, $scope.newCurrency.value);

        currenciesFactory.get(function(currencies) {
            $scope.currencies = currencies;
        });

        //On reset les valeurs
        $scope.newCurrency.name = '';
        $scope.newCurrency.value = '';
    };

    // delete a currency after checking it
    $scope.removeCurrency = function(currency, $index) {
        $scope.toRemove = { currency: currency, index: $index };
        currenciesFactory.remove($scope.toRemove.currency, $scope.toRemove.index);

        currenciesFactory.get(function(currencies) {
            $scope.currencies = currencies;
        });
    };

    currenciesFactory.get(function(currencies) {
        $scope.currencies = currencies;
    });
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', AppController]);