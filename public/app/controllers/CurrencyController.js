function CurrencyController($scope, currencyFactory, $location) {
	$scope.currency = [ ];

	currencyFactory.getCurrency(function(data) {
        $scope.currency = data[0];
    });
}

crypteeApp.controller('CurrencyController', ['$scope', 'currencyFactory' , '$location', CurrencyController]);