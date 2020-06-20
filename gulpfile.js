"use strict";
/*template:

npm i -global gulp gulp-sass gulp-concat gulp-clean autoprefixer gulp-connect-php gulp-minify merge-stream browser-sync child_process gulp-cssnano gulp-rename gulp-eslint gulp-imagemin gulp-newer gulp-postcss gulp-plumber cssnano webpack webpack-stream imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng

*/
const build = require("./src/gulpfiles/gulp-require");
const setting = require("./src/gulpfiles/gulp-settings");
const sassTask = require("./src/gulpfiles/gulp-scss");
const jsTask = require("./src/gulpfiles/gulp-javascript");
const imgMini = require("./src/gulpfiles/gulp-image");
// 基本清理
const cleanJs = () => {
  return build.clean(jsTask.cleanFiles);
};
const cleanCss = () => {
  return build.clean(sassTask.cleanFiles);
};
/**
 * 监控函数
 */
const watch = () => {
  /**
   * 基本框架管理
   */
  var common = [setting.srcPath + "scss/common/**/*"];
  // 监控全局基础css框架更改
  build.gulp.watch(common, build.gulp.series(sassTask.commonToCss, cleanCss));
  // 监控app的样式修改
  build.gulp.watch(
    [setting.srcPath + "scss/app/**/*"],
    build.gulp.series(sassTask.createCss)
  );
  //图片修改监控
  build.gulp.watch(
    setting.images.importPath.common + "**/*",
    build.gulp.series(imgMini.OutImage, imgMini.ImageMini)
  );
  // 字体修改监控
  build.gulp.watch(
    setting.srcPath + "fonts/**/*",
    build.gulp.series(sassTask.WebFonts)
  );
  //监控js修改
  build.gulp.watch(
    [setting.srcPath + "js/common/**/*", setting.srcPath + "js/core/**/*"],
    build.gulp.series(jsTask.commonJs, cleanJs)
  );
  build.gulp.watch(
    setting.srcPath + "js/object/**/*",
    build.gulp.series(jsTask.footJs, cleanJs)
  );

  build.gulp.watch(
    [setting.assetFolder + "**/*", "./**/*.php"],
    build.browserSync_reload
  );
};

const defaultTask = build.gulp.series(
  build.gulp.series(
    sassTask.commonToCss,
    sassTask.createCss,
    cleanCss,
    sassTask.WebFonts
  ),
  build.gulp.series(jsTask.commonJs, jsTask.footJs, cleanJs),
  build.gulp.series(imgMini.OutImage)
);
exports.commonscss = build.gulp.series(sassTask.commonToCss, cleanCss);
exports.appcss = build.gulp.series(sassTask.createCss, cleanCss);
exports.webfont = sassTask.WebFonts;
exports.commonjs = build.gulp.series(jsTask.commonJs, cleanJs);
exports.appjs = build.gulp.series(jsTask.footJs, cleanJs);
exports.imagesMini = imgMini.ImageMini;
exports.watch = build.gulp.series(
  defaultTask,
  build.gulp.parallel(watch, build.browserSync_start)
);
exports.default = defaultTask;
