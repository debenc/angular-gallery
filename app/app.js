(function(){
	'use strict';

	angular.module('AngularGallery', [
		'ngAnimate',
		'ui.router',
		'hmTouchEvents',

		// components
		'component.hero',

		// states
		'states.recent',

	]);

})();
