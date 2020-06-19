const settings = require("./gulp-settings");
const build = require("./gulp-require");

module.exports = {
  cleanFiles: [settings.clearFolder],
  commonToCss: () => {
    var exportPath = settings.sass.exportPath.common;
    return build.gulp
      .src(settings.sass.importPath.common)
      .pipe(build.plumber())
      .pipe(build.sass({ outputStyle: "expanded" }))
      .pipe(build.concat("common.css"))
      .pipe(build.gulp.dest(settings.clearFolder))
      .pipe(build.rename({ suffix: ".min" }))
      .pipe(build.postcss([build.autoprefixer(), build.cssnano()]))
      .pipe(build.gulp.dest(exportPath));
  },
  createCss: () => {
    var importPath = settings.sass.importPath.app,
      exportPath = settings.sass.exportPath.app;
    return build.gulp
      .src(importPath)
      .pipe(build.plumber())
      .pipe(build.sass({ outputStyle: "expanded" }))
      .pipe(build.concat("app.css"))
      .pipe(build.gulp.dest(settings.clearFolder))
      .pipe(build.rename({ suffix: ".min" }))
      .pipe(build.postcss([build.autoprefixer(), build.cssnano()]))
      .pipe(build.gulp.dest(exportPath));
  },
  WebFonts: () => {
    var importPath = settings.webfonts;
    var R = importPath.map(function (element) {
      console.log(element[0], element[1]);
      return build.gulp
        .src(element[0])
        .pipe(build.plumber())
        .pipe(build.gulp.dest(element[1]));
    });
    return build.merge(R);
  },
};
