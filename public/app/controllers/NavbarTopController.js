function NavbarTopController($scope, $location) {

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

crypteeApp.controller('NavbarTopController', ['$scope', '$location', NavbarTopController]);