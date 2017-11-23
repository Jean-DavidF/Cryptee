var crypteeApp = angular.module('crypteeApp', ['ui.router', 'chart.js']);

crypteeApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // AUTH

        .state('app', {
            url: '/',
            templateUrl: 'app/views/app.html',
            controller: 'AppController'
        })

        // MANAGE GROUPS

        .state('project', {
            url: '/project',
            templateUrl: 'app/views/project.html',
            controller: 'ProjectController'
        })

// Permet de créer le défilement automatique
});

function MainController($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

angular.module('crypteeApp').controller('MainController', ['$route', '$routeParams', '$location', MainController ]);

