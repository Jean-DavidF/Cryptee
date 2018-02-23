function CurrencyController($scope, currencyFactory, $location) {
		$scope.currency = [ ];
		$scope.chartPrices = [ ];
		$scope.chartDates = [ ];

		currencyFactory.getCurrency(function(data) {
	      $scope.currency = data[0];
	  });

		currencyFactory.getCharts(function(datas) {
				$scope.datas = datas.data;
				for (var i = 0; i <= $scope.datas.length - 1; i++) {
						var object = $scope.datas[i];

						// Format timestamp to date
						var date = new Date(parseInt(object.time) * 1000);

						// Send datas to arrays
						$scope.chartPrices.push(object.price);
						$scope.chartDates.push(object.time);
				}
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
