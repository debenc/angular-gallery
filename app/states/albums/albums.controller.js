(function(){
'use strict';

	angular.module('states.albums').controller('AlbumsController', function($state, fireSource) {

		var vm = this;

/*		fireSource.get().$loaded(function(response) {
			console.log(response);
		});
*/
		
		vm.albums = fireSource.getFakeGalleries();
		
	});

})();
