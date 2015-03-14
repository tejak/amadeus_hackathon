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

(function () {
    'use strict';

    var app = angular.module('MainModule' /*, ['ui.bootstrap'] */ );

    function DetailsController(DetailsFactory) {
        var vm = this;

        vm.songDetails = DetailsFactory.empireDetails;

    }

    DetailsController.$inject = ['DetailsFactory'];

    app.controller('DetailsController', DetailsController);

})();

(function () {
    'use strict';

    var app = angular.module('MainModule');

    function LicenseController() {
        var vm = this;



    }

    // LicenseController.$inject = [];

    app.controller('LicenseController', LicenseController);
})();

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

angular.module('okra.templates', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put("app/templates/details.tpl.html",
        "<div class=\"row\"><div class=\"col-sm-8\" style=\"\"><h2 class=\"am-search-title-panel\"><strong>CREDITS</strong></h2><div role=\"tabpanel\"><ul class=\"nav nav-tabs am-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a href=\"#basic\" aria-controls=\"basic\" role=\"tab\" data-toggle=\"tab\">Basic</a></li><li role=\"presentation\"><a href=\"#instrumental\" aria-controls=\"instrumental\" role=\"tab\" data-toggle=\"tab\">Instrumental</a></li><li role=\"presentation\"><a href=\"#engineering\" aria-controls=\"engineering\" role=\"tab\" data-toggle=\"tab\">Engineering</a></li><li role=\"presentation\"><a href=\"#songwriting\" aria-controls=\"songwriting\" role=\"tab\" data-toggle=\"tab\">Song Writing</a></li></ul><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane active\" id=\"basic\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.basic\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"instrumental\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.instrumental\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"engineering\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.engineering\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"songwriting\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.song_writing\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div></div></div></div><h2 class=\"am-search-title-panel\"><strong>RIGHTS</strong></h2><div class=\"col-sm-4\" style=\"padding-left: 50px\"><div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs am-side-tabs\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">Masters</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingTwo\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Publishing</a></h4></div><div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingThree\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Sync</a></h4></div><div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingFour\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">Performance</a></h4></div><div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingFive\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">Transcript</a></h4></div><div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">Buy Now</button></div></div></div></div></div></div>"
    );
    $templateCache.put("app/templates/license.tpl.html",
        "");
    $templateCache.put("app/templates/results.tpl.html",
        "<div class=\"\"><h2 class=\"am-search-title\">Search results for <strong>\"empire state of mind\"</strong>:</h2><table class=\"table table-centered\"><tr class=\"am-row-title\"><th>Song</th><th>Artist(s)</th><th>Album</th><th>Year of Release</th></tr><tr ng-repeat=\"song in vm.searchResults\" ui-sref=\"details\" class=\"am-table-row\"><td>{{song.name}}</td><td>{{song.artist}}</td><td>{{song.album}}</td><td>{{song.year}}</td></tr></table></div>"
    );
    $templateCache.put("app/templates/search.tpl.html",
        "<div class=\"am-search\"><input type=\"text\" placeholder=\"Song, artist, album...\" id=\"am-input-text\" am-enter=\"vm.nextPage()\"> <input type=\"button\" id=\"am-search-button\" ui-sref=\"results\"></div>"
    );
}]);
