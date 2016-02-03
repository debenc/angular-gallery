(function(){
	'use strict';

	angular.module('component.hero').directive('heroStatic', function() {

		return {
			restrict: 'AE',
			templateUrl: 'components/hero/hero-static/hero-static.html'
		};
		
	});

})();