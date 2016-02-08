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
		'component.footercmp',
		'component.datasource',

		// states
		'states.recent',
		'states.albums'

	]);

})();
