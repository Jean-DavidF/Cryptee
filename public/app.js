var crypteeApp = angular.module('crypteeApp', ['ui.router', 'chart.js']);

crypteeApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // Dashboard

        .state('app', {
            url: '/',
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
            url: '/coins/{CoinName}',
            templateUrl: 'app/views/currency.html',
            controller: 'CurrencyController'
        })

});

function MainController($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

angular.module('crypteeApp').controller('MainController', ['$route', '$routeParams', '$location', MainController ]);

