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
