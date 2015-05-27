var gulp = require('gulp'),
	del = require('del'),
	svgSprite = require('gulp-svg-sprite'),
	config = {
		mode: {
			css: {
				sprite : "svg/sprite.svg",
				dest: 'out',
				prefix: '.icon-svg-%s',
				render: {
					less: true
				},
				example: true 
			}
		}
	};

gulp.task('svg', function (cb) {
	del([
		'out/**/*',
		'!out/.gitkeep'
	], function(){
		gulp.src('svg/*.svg')
			.pipe(svgSprite(config))
			.pipe(gulp.dest('.'));
	});
});

gulp.task('default', [
	'svg'
]);