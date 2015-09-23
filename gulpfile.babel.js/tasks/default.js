/*
 * @title Default
 * @description A bundle task that generates production ready code
 * @example (cli) gulp
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('default', () => {
  runSequence(
    'karma',
    'clean',
    'iconfont',
    'sass',
    'eslint',
    'concat',
    ['minifyHtml', 'imagemin'],
    'revReplace',
    'move'
  );
});
