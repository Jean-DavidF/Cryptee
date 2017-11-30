var crypteeApp = angular.module('crypteeApp', ['ui.router', 'chart.js']);

crypteeApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('app', {
            url: '/',
            templateUrl: 'app/views/app.html',
            controller: 'AppController'
        })

        .state('project', {
            url: '/project',
            templateUrl: 'app/views/project.html',
            controller: 'ProjectController'
        })
        
});

function MainController($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

angular.module('crypteeApp').controller('MainController', ['$route', '$routeParams', '$location', MainController ]);

