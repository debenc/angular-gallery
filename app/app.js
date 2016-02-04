(function(){
	'use strict';

	angular.module('AngularGallery', [
		'firebase',
		'ngAnimate',
		'ui.router',
		'hmTouchEvents',

		// components
		'component.hero',
		'component.navbar',
		'component.datasource',

		// states
		'states.recent',

	]);

})();
