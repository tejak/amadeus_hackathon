angular.module('okra.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("app/templates/details.tpl.html",
    "<div class=\"row\"><div class=\"col-sm-8\" style=\"\"><h2 class=\"am-search-title-panel\"><strong>CREDITS</strong></h2><div role=\"tabpanel\"><ul class=\"nav nav-tabs am-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a href=\"#basic\" aria-controls=\"basic\" role=\"tab\" data-toggle=\"tab\">Basic</a></li><li role=\"presentation\"><a href=\"#instrumental\" aria-controls=\"instrumental\" role=\"tab\" data-toggle=\"tab\">Instrumental</a></li><li role=\"presentation\"><a href=\"#engineering\" aria-controls=\"engineering\" role=\"tab\" data-toggle=\"tab\">Engineering</a></li><li role=\"presentation\"><a href=\"#songwriting\" aria-controls=\"songwriting\" role=\"tab\" data-toggle=\"tab\">Song Writing</a></li></ul><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane active\" id=\"basic\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.basic\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"instrumental\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.instrumental\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"engineering\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.engineering\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div><div role=\"tabpanel\" class=\"tab-pane\" id=\"songwriting\"><table class=\"table table-striped\"><tr ng-repeat=\"row in vm.songDetails.song_writing\"><td class=\"am-row-title\"><strong>{{row.task}}:</strong></td><td>{{row.people}}</td></tr></table></div></div></div></div><h2 class=\"am-search-title-panel\"><strong>RIGHTS</strong></h2><div class=\"col-sm-4\" style=\"padding-left: 50px\"><div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs am-side-tabs\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">Masters</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingTwo\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Publishing</a></h4></div><div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingThree\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Sync</a></h4></div><div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingFour\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">Performance</a></h4></div><div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">License Now</button> <button class=\"am-cta-secondary\">Name Your Price &raquo;</button> <button class=\"am-cta-secondary\">Get Contact Info &raquo;</button></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading am-side-tabs\" role=\"tab\" id=\"headingFive\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">Transcript</a></h4></div><div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\"><div class=\"panel-body am-panel\"><button class=\"am-cta\">Buy Now</button></div></div></div></div></div></div>");
  $templateCache.put("app/templates/license.tpl.html",
    "");
  $templateCache.put("app/templates/results.tpl.html",
    "<div class=\"\"><h2 class=\"am-search-title\">Search results for <strong>\"empire state of mind\"</strong>:</h2><table class=\"table table-centered\"><tr class=\"am-row-title\"><th>Song</th><th>Artist(s)</th><th>Album</th><th>Year of Release</th></tr><tr ng-repeat=\"song in vm.searchResults\" ui-sref=\"details\" class=\"am-table-row\"><td>{{song.name}}</td><td>{{song.artist}}</td><td>{{song.album}}</td><td>{{song.year}}</td></tr></table></div>");
  $templateCache.put("app/templates/search.tpl.html",
    "<div class=\"am-search\"><input type=\"text\" placeholder=\"Song, artist, album...\" id=\"am-input-text\" am-enter=\"vm.nextPage()\"> <input type=\"button\" id=\"am-search-button\" ui-sref=\"results\"></div>");
}]);
