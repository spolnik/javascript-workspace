angular.module('app')
    .service('UserSvc', function ($http, $location, $window) {
        var svc = this;

        svc.getUser = function () {
            return $http.get('/api/users')
                .then(function (response) {
                    return response.data;
                });
        };

        svc.login = function (username, password) {
            return $http.post('/api/sessions', {
                username: username, password: password
            }).then(function (response) {
                svc.token = response.data;
                $http.defaults.headers.common['X-Auth'] = response.data;
                return svc.getUser();
            });
        };

        svc.logout = function() {
            $http.defaults.headers.common['X-Auth'] = null;
            $location.path('/');
            $window.location.reload();
        };

        svc.register = function (username, password) {
            return $http.post('/api/users', {
                username: username, password: password
            }).then(function() {
                return svc.login(username, password);
            });
        };
    });