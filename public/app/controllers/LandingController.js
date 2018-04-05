function LandingController($scope, currenciesFactory, $state) {
  $scope.currenciesFactory = currenciesFactory;

  currenciesFactory.getTwoFirst(function(data) {
      $scope.currencies = data;
  });

  $scope.viewCurrency = function(Id) {
      $state.go('currency', {CoinId : Id});
  };
}

crypteeApp.controller('LandingController', ['$scope', 'currenciesFactory', '$state', LandingController]);
