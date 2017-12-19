function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.currencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });

    setInterval(function(){
        console.log('updated !');
        currenciesFactory.getCurrencies(function(data) {
            $scope.currencies = data;
        });
    }, 30000);

    $scope.viewCurrency = function(Id) {
        $state.go('currency', {CoinId : Id});
    };
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', '$state', AppController]);