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
