'use strict';

const gulp = require('gulp');
let install = require('gulp-install');
let conflict = require('gulp-conflict');
let template = require('gulp-template');
let rename = require('gulp-rename');
let moment = require('moment');
let inquirer = require('inquirer');
const path = require('path');
const _ = require('underscore.string');

let workingDirName = path.basename(process.cwd());

let defaults = {
	appName: workingDirName
};

gulp.task('default', (done) => {
	var prompts = [{
			name: 'appName',
			message: 'What is the name of your project?',
			default: defaults.appName
		},
		{
			name: 'appDescription',
			message: 'What is the description?'
		},
		{
			name: 'appVersion',
			message: 'What is the version of your project?',
			default: '0.1.0'
		},
		{
			name: 'authorName',
			message: 'What is the author name?'
		},
		{
			name: 'authorHandle',
			message: 'What is the author handle @..?'
		},
		{
			type: 'confirm',
			name: 'moveon',
			message: 'Are you sure?'
		}
	];

	inquirer.prompt(prompts, function (answers) {
		if(!answers.moveon) {
			return done();
		}
		answers.year = moment().format('YYYY');
		answers.appNameSlug = _.slugify(answers.appName);
		gulp.src([
			__dirname + '/templates/default/**',
			__dirname + '/templates/default/.*'
		])
		.pipe(template(answers))
		.pipe(rename((file) => {
			if (file.basename[0] === '_') {
				file.basename = '.' + file.basename.slice(1);
			}
		}))
		.pipe(conflict('./'))
		.pipe(gulp.dest('./'))
		.pipe(install())
		.on('end', () => {
			done();
		});
	});
});
