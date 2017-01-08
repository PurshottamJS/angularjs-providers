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
