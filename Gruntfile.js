module.exports = function (grunt) {

    'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'src/angular-sizzle.js']
        },

        concat: {
            src: {
                src: ['src/sizzle.js', 'src/angular-sizzle.js'],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        uglify: {
			options: {
				banner: [
					'/*!',
					' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
					' *',
					' * <%= pkg.description %>',
					' *',
					' * <%= pkg.homepage %>',
					'**/'
				].join('\n') + '\n'
			},
			build: {
				files: {
					'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.name %>-<%= pkg.version %>.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};