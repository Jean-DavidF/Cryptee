function NavbarTopController($scope, $location) {

    $scope.isActive = function (viewLocation) {
		return $location.path().indexOf(viewLocation) !== -1;
    }
}

crypteeApp.controller('NavbarTopController', ['$scope', '$location', NavbarTopController]);