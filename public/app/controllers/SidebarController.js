function SidebarController($scope, $location, $rootScope) {

  $scope.isCoinPage = function () {
      var urlArray = ($location.path()).split('/');
      if (urlArray[2] !== undefined) {
        return true;
      } else {
        return false;
      }
  }
}

crypteeApp.controller('SidebarController', ['$scope', '$location', '$rootScope', SidebarController]);
