(function() {
	'use strict';

	angular.module('component.viewer')

	.service('photoViewer', function(ModalService) {

		this.initViewer = function(photoArray) {
			ModalService.showModal({
				templateUrl: 'components/viewer/viewer.html',
				controller: 'ViewerController',
				controllerAs: 'vm',
				inputs: {
					photos: photoArray
				}
			}).then(function(modal) {
				// The modal object has the element built, if this is a bootstrap modal
				// you can call 'modal' to show it, if it's a custom modal just show or hide
				// it as you need to.
				modal.element.show();
				modal.close.then(function(result) {
					//$scope.message = result ? "You said Yes" : "You said No";
				});
			});
		};


	});

}());