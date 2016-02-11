(function(){
	'use strict';

	angular.module('states.gallery')

	.config(function($stateProvider){

		$stateProvider.state('gallery', {
			url: '/gallery',
			parent: 'galleries',
			views: {
				'header@' : {
					template: '<hero-static></hero-static>'
				},
				'content@' : {
					templateUrl: 'states/gallery/gallery.html',
					controller: 'GalleryController',
					controllerAs: 'vm'
				},
				'footercmp@' : {
					template: '<footercmp></footercmp>'
				}
			}
		});

	});

})();
