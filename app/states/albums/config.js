(function(){
	'use strict';

	angular.module('states.albums')

	.config(function($stateProvider){

		$stateProvider.state('albums', {
			url: '/albums',
			views: {
				'header@' : {
					template: '<hero-static></hero-static>'
				},
				'content@' : {
					templateUrl: 'states/albums/albums.html',
					controller: 'AlbumsController',
					controllerAs: 'vm'
				},
				'footercmp@' : {
					template: '<footercmp></footercmp>'
				}
			}
		});

	});

})();
