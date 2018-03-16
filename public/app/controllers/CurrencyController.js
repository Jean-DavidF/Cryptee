function CurrencyController($scope, currencyFactory, $location) {
		$scope.currency = [ ];

		currencyFactory.getCurrency(function(data) {
	      $scope.currency = data[0];
	  });

		currencyFactory.getCharts(function(datas) {
				$scope.datas = datas.data;

				$scope.allPrices = [ ];
				$scope.chartDates = [ ];

				for (var i = 0; i <= $scope.datas.length - 1; i++) {
						var object = $scope.datas[i];

						// Format timestamp to date
						var date = new Date(parseInt(object.time) * 1000);

						// Send datas to arrays
						$scope.allPrices.push(object.price);
						$scope.chartDates.push(formattedDate(date));
				}

				$scope.chartPrices = [ ];
				$scope.chartPrices.push($scope.allPrices);

				console.log($scope.chartPrices);
				console.log($scope.chartDates);

		});

		//Paramètres du Line Chart
    $scope.colors_reactive_chart = [ {
        backgroundColor: "rgba(26, 88, 159, 0.8)",
        hoverBackgroundColor: "rgba(26, 88, 159, 1)",
        borderColor: "rgba(26, 88, 159, 1)",
        hoverBorderColor: "rgba(26, 88, 159, 1)",
        pointBackgroundColor: "rgba(6, 25, 47, 0.8)",
        pointHoverBackgroundColor: "rgba(6, 25, 47, 1)"
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

crypteeApp.controller('CurrencyController', ['$scope', 'currencyFactory' , '$location', CurrencyController]);
