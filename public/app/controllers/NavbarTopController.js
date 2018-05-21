function NavbarTopController($scope, $location) {
    $scope.isStateLoading = true;
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

    $(document).on('click', '.navLink', function(event) {
      $('.menu-navbar-top').toggleClass('slide-menu');
    });
}

crypteeApp.controller('NavbarTopController', ['$scope', '$location', NavbarTopController]);
