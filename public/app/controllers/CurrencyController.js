function CurrencyController($scope, currencyFactory, $location) {
	$scope.currency = [ ];

	currencyFactory.getCurrency(function(data) {
        $scope.currency = data[0];
    });

    var CurrencyInterval = setInterval(function(){
        var CurrencyId = $location.path().replace('/dashboard','');

        if ($location.path().indexOf(CurrencyId) !== -1 && CurrencyId !== '') {
        	currencyFactory.getCurrency(function(data) {
		        $scope.currency = data[0];
		    });
        } else {
        	clearInterval(CurrencyInterval);
        }
    }, 30000);
}

crypteeApp.controller('CurrencyController', ['$scope', 'currencyFactory' , '$location', CurrencyController]);