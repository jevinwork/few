"use strict";
/*template:

这是一个实现前端开发自动化的gulp模板，使用前请安装nodejs，并使用
npm来完成以下的必要安装。

npm i -g gulp gulp-sass gulp-concat gulp-clean gulp-uglify autoprefixer gulp-connect-php gulp-minify merge-stream browser-sync child_process gulp-cssnano gulp-rename gulp-eslint gulp-imagemin gulp-newer gulp-postcss gulp-plumber gulp-preprocess gulp-wait dotenv cssnano webpack webpack-stream imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng

by dooioomoo
*/
const importPath = "./src/";
const path = require('path');

global.requireLocal = function (name) {
    return require(path.join(__dirname, name))
}
global.setting = require(importPath + "gulpfiles/gulp-settings");
global.builder = require(importPath + "gulpfiles/gulp-require");
global.compile = require(importPath + "gulpfiles/gulp-compile");

// 基本清理
global.cleanFile = {
    clear: () => {
        return builder.clean(setting.base.clearFolder);
    }
};
const watch = require(importPath + "gulpfiles/gulp-watch");
// 輸出各項任務
exports.commonSass = builder.gulp.series(compile.css.commonSass, cleanFile.clear);
exports.appSass = builder.gulp.series(compile.css.appSass, cleanFile.clear);
exports.webfont = compile.fonts.commonFonts;
exports.commonJs = builder.gulp.series(compile.js.commonJs, cleanFile.clear);
exports.appJs = builder.gulp.series(compile.js.appJs, cleanFile.clear);
exports.commonImgs = compile.images.commonImgs;
exports.ImageMini = compile.images.ImageMini;
exports.default = builder.gulp.series(
    builder.gulp.series(
        compile.css.commonSass,
        compile.css.appSass,
    ),
    builder.gulp.series(
        compile.js.commonJs,
        compile.js.appJs,
    ),
    builder.gulp.series(
        compile.fonts.commonFonts,
    ),
    builder.gulp.series(
        compile.images.commonImgs,
    ),
    builder.gulp.series(
        cleanFile.clear,
        compile.images.ImageMini
    ),
);
exports.watch = builder.gulp.series(
    exports.default,
    builder.gulp.parallel(watch.init, builder.browserSync_start)
);
