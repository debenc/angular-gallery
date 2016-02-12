(function() {
	'use strict';

	angular.module('AngularGallery')

	.config(function($urlRouterProvider){
		$urlRouterProvider.otherwise('/recent');
	})

	.run(function($rootScope, $state) {
		FastClick.attach(document.body);
	});

	angular.element(document).ready(function() {
		angular.bootstrap('#AngularGallery', ["AngularGallery"]);		
	});

})();
