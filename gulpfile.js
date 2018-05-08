const gulp = require('gulp');
const sftp = require('gulp-sftp');

gulp.task('deploy', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: 'ui.dayler.io',
            keyContents: process.env.ROOT_KEY,
            remotePath: '/var/www/ui',
            user: 'root',
        }));
});
