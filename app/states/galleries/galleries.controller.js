(function(){
'use strict';

	angular.module('states.galleries').controller('GalleriesController', function($state, dataSource) {

		var vm = this;

		dataSource.getGalleries().$loaded(function(response) {
			vm.galleries = response;
		});
		
	});

})();
