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
