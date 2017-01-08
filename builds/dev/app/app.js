;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates', 'ui.router', 'app.dashboard'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.title = "Angularjs Providers";
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['dashboard'];

    function DashboardController(dashboard) {
        var vm = this;
        vm.title = dashboard.title;
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .provider('dashboard', dashboard);
    dashboard.$inject = [];

    function dashboard() {
        var title;
        return {
            setTitle: function(value) {
                title = value;
            },
            $get: function() {
                return {
                    title: title
                }
            }
        }
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    angular
        .module('app.dashboard')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', 'dashboardProvider'];

    function config($stateProvider, $urlRouterProvider, dashboardProvider) {
        //custom provider
        dashboardProvider.setTitle("This title comes from provider");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            controller: "DashboardController as dashboard",
            // this is the place where to resolve dynamic template
            templateProvider: function($templateCache) {
                // simplified, expecting that the cache is filled
                // there should be some checking... and async $http loading if not found
                return $templateCache.get('components/dashboard/dashboard.template.html');
            }
        })
    };
}(window, angular, undefined));
