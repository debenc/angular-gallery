(function(){
'use strict';

	angular.module('states.gallery').controller('GalleryController', function($state, dataSource) {

		var vm = this;

		dataSource.getGalleryPhotos($state.params.galleryId)
		.$loaded(function(response) {
			/*vm.galleries = response;*/

		});


		
	});

})();
