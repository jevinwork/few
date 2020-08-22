var compile = function (target, done, multiple) {
    if (setting.js[target].import == undefined || setting.js[target].export == undefined) {
        return done();
    }
    if (setting.js[target].import.length < 1 || setting.js[target].export.length < 1) {
        return done();
    }
    if (multiple) {
        return builder.gulp
            .src(setting.js[target].import)
            // .pipe(builder.gulp.dest(setting.base.clearFolder))
            .pipe(
                builder.minify({
                    ignoreFiles: [".combo.js", ".min.js", "-min.js"],
                    ext: {
                        src: ".debug.js",
                        min: ".min.js",
                    },
                    noSource: true
                })
            )
            .pipe(builder.gulp.dest(setting.js[target].export));
    } else {
        return builder.gulp
            .src(setting.js[target].import)
            .pipe(builder.concat("common.js"))
            .pipe(builder.gulp.dest(setting.base.clearFolder))
            .pipe(
                builder.minify({
                    ext: {
                        min: ".min.js",
                    },
                    ignoreFiles: [".combo.js", ".min.js", "-min.js"],
                    noSource: true
                })
            )
            .pipe(builder.gulp.dest(setting.js[target].export));
    }
}

module.exports = {
    commonJs: (cb) => {
        return compile('common', cb);
    },
    appJs: (cb) => {
        return compile('app', cb, 1);
    },
}
