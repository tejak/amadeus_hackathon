(function () {
    'use strict';

    var app = angular.module('MainModule');

    function ResultsController() {
        var vm = this;

        vm.searchResults = [{
            name: "Empire State of Mind",
            artist: "Jay-Z, Alicia Keys",
            album: "The Blueprint 3",
            year: "2009"
        }, {
            name: "Empire State of Mind",
            artist: "Julia Zahra",
            album: "Julia Van Der Toorn",
            year: "2014"
        }, {
            name: "Empire State of Mind",
            artist: "Kim Waters",
            album: "This Heart of Mind",
            year: "2011"
        }, {
            name: "Empire State of Mind",
            artist: "De La Cream",
            album: "I Love Sunday, Vol I",
            year: "2015"
        }, {
            name: "Empire",
            artist: "Shakira",
            album: "Shakira",
            year: "2014"
        }, {
            name: "Empire",
            artist: "Pip Williams",
            album: "Held to Ransom",
            year: "2010"
        }, {
            name: "Empire",
            artist: "Queensryche",
            album: "Empire",
            year: "1990"
        }];

    }

    // ResultsController.$inject = [];

    app.controller('ResultsController', ResultsController);

})();
