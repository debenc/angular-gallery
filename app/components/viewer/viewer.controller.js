(function(){
	'use strict';

	angular.module('component.viewer').controller('ViewerController', function(close, photos) {
		
		var vm = this;

		vm.close = function(result) {
			close();
		};

		console.log(photos);

	});

})();