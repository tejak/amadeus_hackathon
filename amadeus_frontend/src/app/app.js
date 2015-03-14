(function () {
    'use strict';

    //Define high level modules
    angular.module('MainModule', []);
    angular.module('Amadeus.services', []);

    var appDependencies = [
        'ui.router',
        'MainModule',
        'Amadeus.routes',
        'Amadeus.services'
    ];

    var app = angular.module('Amadeus', appDependencies);

    //Manual Bootstrap
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['Amadeus']);
    });

})();
