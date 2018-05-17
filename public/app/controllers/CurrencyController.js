function CurrencyController($scope, currencyFactory, currenciesFactory, $location, $state) {
		$scope.currency = [ ];
		$scope.currencies = [ ];
		$scope.currencyId = $location.path().replace('/dashboard/','');

		currencyFactory.getCurrency(function(data) {
	      $scope.currency = data[0];
	  });

		$scope.viewCurrency = function(Id) {
        $state.go('currency', {CoinId : Id});
    };

		currenciesFactory.getCurrencies(function(data) {
				var currencies = data;
				var currencyIndex = currencies.findIndex(x => x.symbol == $scope.currencyId);
				var j = currencyIndex - 1;

				for (var i = currencyIndex + 1; i < currencyIndex + 11; i++) {
					if (currencies[i] === undefined || currencies[i] == null) {
						if ($scope.currencies.length < 10) {
							$scope.currencies.unshift(currencies[j]);
							j--;
						}
					} else {
						$scope.currencies.push(currencies[i]);
					}
				}
		});

		$scope.selectPeriod = "30";

		$scope.maxDate = new Date();
		$scope.minDate = $scope.selectPeriod ? new Date($scope.maxDate - new Date($scope.selectPeriod * 24 * 3600 * 1000)) : null;

		$scope.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
        }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
        }]
            }
        };

		currencyFactory.getCharts(function(datas) {
				$scope.datas = datas.data;

				$scope.allPrices = [ ];
				$scope.chartDates = [ ];

				if ($scope.datas) {
					for (var i = 0; i <= $scope.datas.length - 1; i++) {
							var object = $scope.datas[i];

							// Format timestamp to date
							var date = new Date(parseInt(object.time) * 1000);

							// Send datas to arrays
							if (date < $scope.maxDate && date > $scope.minDate) {
								$scope.allPrices.push(object.price);
								$scope.chartDates.push(formattedDate(date));
							}
					}

					$scope.chartPrices = [ ];
					$scope.chartPrices.push($scope.allPrices);
				}
		});

		// Update the datas by filter
		$scope.updateFilter = function() {
        $scope.maxDate = new Date();
        $scope.minDate = $scope.selectPeriod ? new Date($scope.maxDate - new Date($scope.selectPeriod * 24 * 3600 * 1000)) : null;

				$scope.allPrices = [ ];
				$scope.chartDates = [ ];

				if ($scope.datas) {
					for (var i = 0; i <= $scope.datas.length - 1; i++) {
							var object = $scope.datas[i];

							// Format timestamp to date
							var date = new Date(parseInt(object.time) * 1000);

							// Send datas to arrays
							if (date < $scope.maxDate && date > $scope.minDate) {
								$scope.allPrices.push(object.price);
								$scope.chartDates.push(formattedDate(date));
							}
					}

					$scope.chartPrices = [ ];
					$scope.chartPrices.push($scope.allPrices);
				}
    };

		$scope.colors_reactive_chart = [ {
				backgroundColor: "rgba(132, 237, 245, 0.8)",
        hoverBackgroundColor: "rgba(26, 88, 159, 1)",
        borderColor: "rgba(6, 25, 47, 0.4)",
        hoverBorderColor: "rgba(26, 88, 159, 1)",
        pointBackgroundColor: "rgba(6, 25, 47, 0.5)",
        pointHoverBackgroundColor: "rgba(6, 25, 47, 0.7)",
    } ];

    $scope.series_line_chart = ["Valeur"];

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

		function formattedDate(date = new Date) {
			  let month = String(date.getMonth() + 1);
		    let day = String(date.getDate());
		    const year = String(date.getFullYear());

		    if (month.length < 2) month = '0' + month;
		    if (day.length < 2) day = '0' + day;

		    return `${day}/${month}/${year}`;
		}
}

crypteeApp.controller('CurrencyController', ['$scope', 'currencyFactory', 'currenciesFactory', '$location', '$state', CurrencyController]);
