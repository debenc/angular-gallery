(function(){
	'use strict';

	angular.module('component.navbar').controller('navbarController', function($state) {

		var vm = this;

		$(document).scroll(function(evt) {

    	var currentLeft = $(this).scrollTop();

    	if (currentLeft >= 220) {
    		$('navbar').addClass('stick-it');
    	} else {    		
    		$('navbar').removeClass('stick-it');
    	};
		
		});

	});

})();