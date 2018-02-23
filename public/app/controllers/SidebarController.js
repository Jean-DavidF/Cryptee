function SidebarController($scope, $location) {

    $scope.isActive = function (viewLocation) {
		    return $location.path().indexOf(viewLocation) !== -1;
    }
}

crypteeApp.controller('SidebarController', ['$scope', '$location', SidebarController]);
