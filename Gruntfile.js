'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Tasks Configuration
	grunt.initConfig({

		// Project Settings
		config: {
			app: 'app',
			dist: 'dist',
			bower: 'bower_components',
			tmp: './.tmp',
			pkg: grunt.file.readJSON('package.json')
		},

		clean: {
			tmp: '<%= config.tmp %>'
		},
		copy: {
			bower: {
				files: [{
					expand: true,
					cwd: 'bower_components',
					src: ['**/*.js', '!**/*min.js', '**/*.css', '!**/*min.css'],
					dest: '<%= config.tmp %>/bower_components'
				}]
			}
		},
		less: {
			tmp: {
				files: {
					'.tmp/assets/styles/main.css' : ['app/assets/styles/main.less']
				}
			}
		},
		watch: {
			less: {
				files: ['<%= config.app %>/**/*.less'],
				tasks: ['less:tmp']
			}
		},
		connect: {
			options: {
				port: 9000,
				hostname: '0.0.0.0',
				livereload: 35729
			},
			livereload: {
				options: {
					base: [
						'<%= config.tmp %>',
						'<%= config.app %>'
					]
				}
			}
		}

	});


	/* Custom Tasks */
	grunt.registerTask('serve', 'Compile and start web server', function() {
		var tasks = [
			'clean:tmp',
			'copy:bower',
			'less:tmp',
			'connect:livereload',
			'watch'
		];
		grunt.task.run(tasks);	
	});

	grunt.registerTask('default', [
		'serve'
	]);

};