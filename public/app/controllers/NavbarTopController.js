function NavbarTopController($scope, $location) {

    $scope.isActive = function (viewLocation) {
		    return $location.path().indexOf(viewLocation) !== -1;
    }

    $scope.isDashboard = function () {
        if ($location.path().indexOf('/dashboard') !== -1) {
            return true;
        } else {
            return false;
        }
    }
}

crypteeApp.controller('NavbarTopController', ['$scope', '$location', NavbarTopController]);
