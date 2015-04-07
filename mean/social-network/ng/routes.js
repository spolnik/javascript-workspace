angular.module('app')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {controller: 'PostsCtrl', templateUrl: '/templates/posts.html'})
            .when('/register', {controller: 'RegisterCtrl', templateUrl: '/templates/register.html'})
            .when('/login', {controller: 'LoginCtrl', templateUrl: '/templates/login.html'});

        $locationProvider.html5Mode(true);
    });
