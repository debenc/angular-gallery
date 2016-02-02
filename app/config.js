(function(){
	'use strict';

	angular.module('AngularPhotogallery')

	.config(function($urlRouterProvider){

		// default route should be dashboard (if logged in, otherwise we reroute to /login)
		$urlRouterProvider.otherwise('/');

	})

	.run(function($rootScope, $state) {

		// initializing FastClick when DOM is ready
		FastClick.attach(document.body);

	});

})();
