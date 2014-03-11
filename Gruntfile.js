module.exports = function(grunt) {
  var specs = "spec/*Spec.js",
      helpers = "spec/*Helpers.js";
  grunt.initConfig({
    jshint: {
      ignore_warning: {
        options: {
          '-W083': true,
        },
        src: ['videojs.vast.js', specs],
      }, 
    },
    jasmine: {
      src: 'videojs.vast.js',
      options: {
        specs: specs,
        helpers: helpers,
        vendor: [
          "http://vjs.zencdn.net/4.4.3/video.js",
          "videojs-contrib-ads/video.ads.js",
          "vast-client.js"
        ]
      }
    },
    watch: {
      scripts: {
        files: ['*.js', 'spec/*.js'],
        tasks: ['jshint', 'jasmine']
      },
    }
    // shell: {
    //   selenium: {
    //     options: {
    //       stdout: true,
    //       failOnError: true
    //     },
    //     command: "node spec/sauce-wd.js"
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'jasmine', 'watch']);
  grunt.registerTask('travis', ['jshint', 'jasmine', 'shell']);
};