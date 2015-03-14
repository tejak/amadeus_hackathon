(function () {
    'use strict';

    var module = angular.module('Amadeus.services');
    /**
     * @ngdoc service
     * @name Amadeus.services.DetailsFactory
     * @description
     *
     * # DetailsFactory
     * A factory for getting song details. Until a backend is implemented, will store hardcoded data.
     *
     */

    function DetailsFactory() {

        var Details = {
            empireDetails: {
                basic: [{
                    task: "Name",
                    people: "Empire State of Mind"
                }, {
                    task: "Vocals",
                    people: "Jay-Z, Alicia Keys"
                }, {
                    task: "Producer(s)",
                    people: "Alexander Shuckburgh"
                }, {
                    task: "Music Samples",
                    people: '"Love on a Two-Way Street" by Stacy Lattisaw'
                }],
                instrumental: [{
                    task: "Keyboard",
                    people: "Jeff Bhasker, Kevin Randolph"
                }],
                engineering: [{
                    task: "Arranging",
                    people: "Hart Gunther, Jason Wilkie"
                }, {
                    task: "Mastering",
                    people: "Tony Dawsey"
                }, {
                    task: "Engineer",
                    people: "Chris Godbey, Andrew Dawson, Karl Heilbron, Marcos Tovar, Miki Tsutsumi, Ann Mincieli"
                }, {
                    task: "Mixing",
                    people: "Ken Duro Ifill, Chris Godbey"
                }, {
                    task: "Recording",
                    people: 'Gimel "Young Guru" Keaton, Ann Mincieli, Luke Steele'
                }],
                song_writing: [{
                    task: "Songwriter(s)",
                    people: "Janet Sewell, Angela Hunte, Shawn Carter, Sylvia Robinson, Burt Keyes, Alicia Keys, Alexander Shuckburgh"
                }]
            },

            getOrganizations: function (userId) {
                var url = okraAPI.getOrganizations + userId;
                return $http.get(url);
            }
        };

        return Details;
    }

    // DetailsFactory.$inject = ['$http'];

    module.factory('DetailsFactory', DetailsFactory);

})();
