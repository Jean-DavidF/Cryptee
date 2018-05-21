function ErrorController($scope, $rootScope, $state) {
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      $rootScope.previousState = {state: fromState, params: fromParams};
  });

  $rootScope.backState = function(state, params) {
      if (state == undefined || state == null) {
        $state.go('landing');
        return;
      }
      if (params && Object.keys(params) == 'CoinId') {
        $state.go('dashboard');
        return;
      }
      $state.go(state.name, params);
  };
}

crypteeApp.controller('ErrorController', ['$scope', '$rootScope', '$state', ErrorController]);
