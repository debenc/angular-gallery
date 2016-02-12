(function() {
	'use strict';

	angular.module('AngularGallery', [
		'firebase',
		'ngAnimate',
		'ui.router',
		'hmTouchEvents',

		// components
		'component.hero',
		'component.navbar',
		'component.footercmp',
		'component.datasource',
		'component.viewer',

		// states
		'states.recent',
		'states.galleries',
		'states.gallery'

	]);

})();
