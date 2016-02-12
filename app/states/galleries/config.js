(function() {
	'use strict';

	angular.module('states.galleries')

	.config(function($stateProvider){

		$stateProvider.state('galleries', {
			url: '/galleries?galleryId',
			views: {
				'header@' : {
					template: '<hero-static></hero-static>'
				},
				'content@' : {
					templateUrl: 'states/galleries/galleries.html',
					controller: 'GalleriesController',
					controllerAs: 'vm'
				},
				'footercmp@' : {
					template: '<footercmp></footercmp>'
				}
			}
		});

	});

})();
