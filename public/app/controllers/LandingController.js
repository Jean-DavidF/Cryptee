function LandingController($scope, currenciesFactory) {
  $scope.currenciesFactory = currenciesFactory;

  currenciesFactory.getTwoFirst(function(data) {
      $scope.currencies = data;
  });
}

crypteeApp.controller('LandingController', ['$scope', 'currenciesFactory', LandingController]);
