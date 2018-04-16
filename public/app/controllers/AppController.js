function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.currencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });

    var sort_by = function(field, reverse, primer){

       var key = primer ?
           function(x) {return primer(x[field])} :
           function(x) {return x[field]};

       reverse = !reverse ? 1 : -1;

       return function (a, b) {
           return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
         }
    }

    $scope.updateChange = function() {
			if ($scope.currencies) {
        $scope.currencies.sort(sort_by($scope.selectChange, true));
      }
		};

    $scope.updateValue = function() {
      var parameter = 'cmc_price_usd';
      var mapping = {
        'ascending' : true,
        'descanding' : false
      }

      if ($scope.currencies) {
        $scope.currencies.sort(sort_by(parameter, mapping[$scope.selectValue], parseInt));
      }
    }

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
