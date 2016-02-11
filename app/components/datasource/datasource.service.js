(function() {
	'use strict';

	angular.module('component.datasource')

	.service('dataSource', function($firebaseArray){

		// 2014-05-09 yyyy-mm-dd

		this.getPhotos = function() {
			var firephotos = new Firebase('https://angularphotogallery.firebaseio.com/photos/');
			return $firebaseArray(firephotos);
		};

		this.getGalleries = function() {
			var firegalleries = new Firebase('https://angularphotogallery.firebaseio.com/galleries/');
			return $firebaseArray(firegalleries);
		};

		this.getGalleryPhotos = function(galleryId) {
			var firegalleryphotos = new Firebase('https://angularphotogallery.firebaseio.com/photos/')
			.orderByChild('galleryId').equalTo(galleryId);

			return $firebaseArray(firegalleryphotos);
		};

	});

}());