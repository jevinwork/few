module.exports = {
    init: (done) => {
        // 监控项目内各个文件夹的修改，并运行对应的编译后自动刷新
        const watchGroup = {
            commonSass: [
                [setting.base.importPath + "scss/common/**/*"],
                [compile.css.commonSass, cleanFile.clear]
            ],
            appSass: [
                [setting.base.importPath + "scss/app/**/*"],
                [compile.css.appSass, cleanFile.clear]
            ],
            commonJs: [
                setting.js.common.import,
                [compile.js.commonJs, cleanFile.clear]
            ],
            appJs: [
                setting.js.app.import,
                [compile.js.appJs, cleanFile.clear]
            ],
            commonImgs: [
                setting.images.common.import,
                [compile.images.commonImgs]
            ],
        };

        Object.keys(watchGroup).forEach(directory => {
            let task = watchGroup[directory];
            builder.gulp.watch(
                task[0],
                builder.gulp.series.apply(builder.gulp, task[1])
            );
        });
        builder.gulp.watch(
            [
                "./**/*",
            ],
            builder.browserSync_reload
        );
        return done();
    }
}
