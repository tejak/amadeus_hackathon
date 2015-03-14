(function () {
    'use strict';

    var app = angular.module('MainModule');

    function SearchController($state) {
        var vm = this;
        vm.nextPage = function () {
            $state.go('results');
        };
    }



    SearchController.$inject = ['$state'];

    app.controller('SearchController', SearchController);
    app.directive('amEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.amEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });

})();
