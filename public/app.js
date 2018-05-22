var crypteeApp = angular.module('crypteeApp', ['ui.router', 'chart.js']);

crypteeApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/error');
    $locationProvider.html5Mode({

        enabled: true

    });

    $stateProvider

        // Landing page

        .state('landing', {
            url: '/',
            templateUrl: 'app/views/landing.html',
            controller: 'LandingController'
        })

        // Dashboard

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/app.html',
            controller: 'AppController'
        })

        // The project

        .state('project', {
            url: '/project',
            templateUrl: 'app/views/project.html',
            controller: 'ProjectController'
        })

        // The team

        .state('team', {
            url: '/team',
            templateUrl: 'app/views/team.html',
            controller: 'TeamController'
        })

        // Contact

        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html',
            controller: 'ContactController'
        })

        // Currency

        .state('currency', {
            url: '/dashboard/{CoinId}',
            templateUrl: 'app/views/currency.html',
            controller: 'CurrencyController'
        })

        // Error

        .state('error', {
            url: '/error',
            templateUrl: 'app/views/error.html',
            controller: 'ErrorController'
        });

}]);

function MainController($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

angular.module('crypteeApp').controller('MainController', ['$route', '$routeParams', '$location', MainController ]);
