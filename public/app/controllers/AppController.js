function AppController($scope, currenciesFactory, $location, $http, $state) {
    $scope.currencies = [ ];
    $scope.saveCurrencies = [ ];
    $scope.searchCurrency = '';

    $scope.currenciesFactory = currenciesFactory;

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });

    $scope.dateTime = new Date;

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
      if ($scope.selectChange) {
        if ($scope.currencies) {
          $scope.currencies.sort(sort_by($scope.selectChange, true));
        }
      } else {
        currenciesFactory.getCurrencies(function(data) {
            $scope.currencies = data;
        });
      }

		};

    $scope.updateValue = function() {
      var parameter = 'cmc_price_usd';
      var mapping = {
        'ascending' : true,
        'descanding' : false
      }

      if ($scope.selectValue) {
        if ($scope.currencies) {
          $scope.currencies.sort(sort_by(parameter, mapping[$scope.selectValue], parseInt));
        }
      } else {
        currenciesFactory.getCurrencies(function(data) {
            $scope.currencies = data;
        });
      }

    }

    var AllCurrenciesInterval = setInterval(function(){
        if ('/dashboard' === $location.path()) {
          console.log($scope.selectValue);
          console.log($scope.selectChange);
          if ($scope.selectValue == undefined && $scope.selectChange == undefined) {
            currenciesFactory.getCurrencies(function(data) {
                $scope.currencies = data;
            });
          } else if ($scope.selectValue !== undefined) {
            currenciesFactory.getCurrencies(function(data) {
                $scope.currencies = data;
                $scope.updateValue();
            });

          } else if ($scope.selectChange !== undefined) {
            currenciesFactory.getCurrencies(function(data) {
                $scope.currencies = data;
                $scope.updateChange();
            });
          }
        } else {
            clearInterval(AllCurrenciesInterval);
        }
    }, 60000);

    $scope.viewCurrency = function(Id) {
        $state.go('currency', {CoinId : Id});
    };

    Number.prototype.padLeft = function(base,chr){
       var  len = (String(base || 10).length - String(this).length)+1;
       return len > 0? new Array(len).join(chr || '0')+this : this;
    }


    var d = new Date,
        dformat = [ d.getDate().padLeft(),
                    (d.getMonth()+1).padLeft(),
                    d.getFullYear()].join('/')+
                    ' à ' +
                  [ d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                  ].join('h');
     $scope.dateTime = dformat;

     function resetFilter(select1, select2) {
       $(document).on('change', 'select[name=' + select1 + ']', function(event) {
         var select = $('select[name=' + select2 + ']');
         if (select.val()) {
           select.val('');
         }
       });
     }

     resetFilter('selectChange', 'selectValue');
     resetFilter('selectValue', 'selectChange');

}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', '$state', AppController]);
