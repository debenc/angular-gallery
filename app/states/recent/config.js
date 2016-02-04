(function(){
	'use strict';

	angular.module('states.recent')

	.config(function($stateProvider){

		$stateProvider.state('recent', {
			url: '/recent',
			views: {
				'header@' : {
					template: '<hero-static></hero-static>'
				},
				'navbar@' : {
					template: '<navbar></navbar>'
				},
				'content@' : {
					templateUrl: 'states/recent/recent.html',
					controller: 'RecentController',
					controllerAs: 'vm'
				},
				'footer@' : {
					template: '<footer></footer>'
				}
			}
		});

	});

})();
