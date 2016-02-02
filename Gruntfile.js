'use strict';

module.exports = function(grunt) {
	
	// Configurable paths for the application
	var appConfig = {
		app: 'app',
		dist: 'dist',
		bower: 'bower_components',
		tmp: './.tmp',
		pkg: grunt.file.readJSON('package.json')
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		config: appConfig
	});

};