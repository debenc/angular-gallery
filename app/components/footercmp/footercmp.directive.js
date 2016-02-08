(function(){
	'use strict';

	angular.module('component.footercmp').directive('footercmp', function() {

		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'components/footercmp/footercmp.html' 
		};
	
	});

})();