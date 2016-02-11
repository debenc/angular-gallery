(function(){
'use strict';

	angular.module('states.recent').controller('RecentController', function($state, fireSource) {

		var vm = this;

		fireSource.getPhotos().$loaded(function(response) {
			vm.photos = response;
		});
		
	});

})();
