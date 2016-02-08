(function(){
	'use strict';

	angular.module('AngularGallery')

	.config(function($urlRouterProvider){
		// default route
		$urlRouterProvider.otherwise('/recent');

	})

	.run(function($rootScope, $state) {
		// initializing FastClick when DOM is ready
		FastClick.attach(document.body);
	});

	angular.element(document).ready(function() {
		angular.bootstrap('#AngularGallery', ["AngularGallery"]);		
	});

})();
