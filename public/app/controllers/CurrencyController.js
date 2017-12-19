function CurrencyController($scope, currencyFactory, $location) {
	$scope.currency = [ ];

	currencyFactory.getCurrency(function(data) {
        $scope.currency = data[0];
    });

    setInterval(function(){
        console.log('updated !');
        currencyFactory.getCurrency(function(data) {
	        $scope.currency = data[0];
	    });
    }, 30000);
}

crypteeApp.controller('CurrencyController', ['$scope', 'currencyFactory' , '$location', CurrencyController]);