(function () {
    'use strict';

    var router = angular.module('Amadeus.routes', ['ui.router']);

    /**
     * @ngdoc service
     * @name uiRouter.states
     * @description
     *
     * # Routes
     * A set of front end states/routes that were created by ui-router.
     *
     */

    router.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('search', {
                url: '/',
                templateUrl: 'app/templates/search.tpl.html',
                controller: 'SearchController as vm'
            })
            .state('results', {
                url: '/results',
                templateUrl: 'app/templates/results.tpl.html',
                controller: 'ResultsController as vm'
            })
            .state('details', {
                url: '/details',
                templateUrl: 'app/templates/details.tpl.html',
                controller: 'DetailsController as vm'
            })
            .state('license', {
                url: '/license',
                templateUrl: 'app/templates/license.tpl.html',
                controller: 'LicenseController as vm'
            });
    });
})();
