(function() {
	'use strict';

	angular.module('component.navbar').directive('navbar', function($document) {

		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'components/navbar/navbar.html',
			link: function(scope, elem, attr, ctrl) {
				scope.scrollIt = false;
				$document.on('scroll', function () {					
					var scrollAmount = $document.scrollTop();					
					scope.$apply(function() {
						scope.scrollIt = scrollAmount >= 220 ? true : false;		
					});
				});
			}
		};
	
	});

})();