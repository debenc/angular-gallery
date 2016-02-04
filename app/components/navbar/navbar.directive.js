(function(){
	'use strict';

	angular.module('component.navbar').directive('navbar', function() {

		return {
			restrict: 'AE',
			templateUrl: 'components/navbar/navbar.html',
			controller: 'navbarController'
		};
		
	});

})();