const gulp = require('gulp');
const backstop = require('backstopjs');
const run = require('gulp-run');

gulp.task('backstop:test', () => backstop('reference'));
gulp.task('send:slack', function() {
    return run('node script.js').exec();
})