function NavbarTopDashboardController($scope, $location) {

    $scope.isDashboard = function () {
        if ($location.path().indexOf('/dashboard') !== -1) {
            return true;
        } else {
            return false;
        }
    }
}

crypteeApp.controller('NavbarTopDashboardController', ['$scope', '$location', NavbarTopDashboardController]);
