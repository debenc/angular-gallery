(function() {
	'use strict';

	angular.module('component.datasource')

	.service('fireSource', function($firebaseArray){

		var galleries = [
			{id: 111, name: 'Gallery 01', date: '1/1/2016', desc: 'supika'},
			{id: 112, name: 'Gallery 02', date: '2/1/2016', desc: 'fenomenalno'},
			{id: 113, name: 'Gallery 03', date: '3/1/2016', desc: 'odlicno'},
			{id: 114, name: 'Gallery 04', date: '4/1/2016', desc: 'izuzetno'}
		];

		var photos = [
			{id: 222, name: 'Photo 02', date: '2016-01-02', url: 'http://krunodebenc.com/images/arch/arch11.jpg', desc: 'uredna', galleryId: 111},
			{id: 224, name: 'Photo 04', date: '2016-04-01', url: 'http://krunodebenc.com/images/arch/arch13.jpg', desc: 'moderna', galleryId: 114},
			{id: 223, name: 'Photo 03', date: '2016-03-03', url: 'http://krunodebenc.com/images/arch/arch12.jpg', desc: 'pristojna', galleryId: 113},
			{id: 226, name: 'Photo 06', date: '2016-06-12', url: 'http://krunodebenc.com/images/arch/arch15.jpg', desc: 'krasna', galleryId: 114},
			{id: 225, name: 'Photo 05', date: '2016-05-01', url: 'http://krunodebenc.com/images/arch/arch14.jpg', desc: 'divna', galleryId: 114},
			{id: 221, name: 'Photo 01', date: '2016-12-02', url: 'http://krunodebenc.com/images/arch/arch10.jpg', desc: 'dobra', galleryId: 111},
			{id: 227, name: 'Photo 07', date: '2016-12-05', url: 'http://krunodebenc.com/images/arch/arch16.jpg', desc: 'mega', galleryId: 112}
		];
		// 2014-05-09 yyyy-mm-dd


		this.get = function() {
			var randomRoomId = Math.round(Math.random() * 100000000);
			var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/intro/demo/" + randomRoomId);

			// this uses AngularFire to create the synchronized array
			return $firebaseArray(ref);
		};

		this.getFakePhotos = function() {
			return photos;
		};

		this.getFakeGalleries = function() {
			return galleries;
		};


	});

}());
