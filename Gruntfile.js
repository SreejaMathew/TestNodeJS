var grunt = require('grunt');
var scan = require('d:/oscsnodejs/oscs/OSCS_NODEJS/Scan');
grunt.registerTask('scan', 'Scan NodeJS Module', function(name){
  var done = this.async();
  scan.scandeps(this.args);
});