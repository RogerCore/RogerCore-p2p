'use strict';

var gulp = require('gulp');
var rogercoreTasks = require('rogercore-build');

rogercoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
