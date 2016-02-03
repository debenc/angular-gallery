(function(){
	'use strict';

	angular.module('AngularGallery')

	.config(function($urlRouterProvider){

		// default route should be dashboard (if logged in, otherwise we reroute to /login)
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
