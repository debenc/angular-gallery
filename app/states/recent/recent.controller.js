(function(){
'use strict';

	angular.module('states.recent').controller('RecentController', function($state, $filter, dataSource, photoViewer) {

		var vm = this;

		dataSource.getPhotos().$loaded(function(response) {
			vm.photos = $filter('limitTo')(response, 4);
		});

		vm.openViewer = function() {
			photoViewer.initViewer(vm.photos);
		};
		
	});

})();
