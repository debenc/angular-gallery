(function(){
'use strict';

	angular.module('states.recent').controller('RecentController', function($state, fireSource) {

		var vm = this;

		vm.pero = 'djuro';

/*		fireSource.get().$loaded(function(response) {
			console.log(response);
		});
*/
		
		vm.photos = fireSource.getFakePhotos();
		
	});

})();
