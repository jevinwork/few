
const exportPath = "./assets/";
const importPath = "./src/";
const JsGlobal = requireLocal(importPath + "js/js-require.js");
const vo = "vendor/";
const commonFonts = exportPath + "fonts/";

module.exports = {
    base: {
        exportPath: exportPath,
        importPath: importPath,
        clearFolder: exportPath + "temp/",
    },
    server: {
        root: '/',
        //name: 'localhost',
        name: 'few.so',
        port: '3000',
    },
    sass: {
        common: {
            import: [
                importPath + "scss/common/common.scss"
            ],
            export: [
                exportPath + "css/",
            ],
        },
        app: {
            import: [
                importPath + "scss/app/app.scss"
            ],
            export: [
                exportPath + "css/",
            ],
        },
        app_mobile: {
            import: [
                importPath + "scss/app/app_mobile.scss"
            ],
            export: [
                exportPath + "css/",
            ],
        }
    },
    js: {
        common: {
            import: JsGlobal.list.concat([
                importPath + "js/common/**/*",
                importPath + "js/core/*.js",
            ]),
            export: [
                exportPath + 'js/'
            ],
        },
        app: {
            import: [
                importPath + "js/object/*.js"
            ],
            export: [
                exportPath + 'js/'
            ],
        }
    },
    images: {
        common: {
            import: [
                importPath + "imgs/**/*"
            ],
            export: [
                exportPath + 'images/'
            ],
        },
    },
    fonts: {
        common: [
            [vo + "fortawesome/font-awesome/webfonts/**/*", commonFonts + "fontawesome"],
            [vo + "webfontkit/roboto/fonts/**/*", commonFonts + "roboto"],
            [vo + "webfontkit/open-sans/fonts/**/*", commonFonts + "open-sans"],
        ]
    }
}

