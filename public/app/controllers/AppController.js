function AppController($scope, currenciesFactory, $location, $http) {
    $scope.formData = {};
    $scope.currencies = [ ];

    $scope.currenciesFactory = currenciesFactory;

    // when submitting the add form, send the text to the node API
    $scope.createCurrency = function() {
        $http.post('/api/currencies', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.currencies = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a currency after checking it
    $scope.deleteCurrency = function(id) {
        $http.delete('/api/currencies/' + id).success(function(data) {
            $scope.currencies = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    currenciesFactory.getCurrencies(function(data) {
        $scope.currencies = data;
    });
}

crypteeApp.controller('AppController', ['$scope', 'currenciesFactory', '$location', '$http', AppController]);