const server = "template.so";
const port = "3000";

const vo = "vendor/";

const assetFolder = "assets" + "/";
const css = assetFolder + "css" + "/";
const js = assetFolder + "js" + "/";
const images = assetFolder + "images" + "/";
const font = assetFolder + "fonts" + "/";

const srcFolder = "src" + "/";
const src_sass = srcFolder + "scss" + "/";
const src_img = srcFolder + "imgs" + "/";
const src_js = srcFolder + "js" + "/";
const src_fonts = srcFolder + "fonts" + "/";

module.exports = {
  root: "/",
  server: server,
  port: port,
  assetFolder: assetFolder,
  cssPath: css,
  jsPath: js,
  imagesPath: images,
  fontPath: font,
  srcPath: srcFolder,
  clearFolder: assetFolder + "temp/",
  sass: {
    importPath: {
      common: [src_sass + "common/common.scss"],
      app: [src_sass + "app/app.scss"],
    },
    exportPath: {
      common: [css],
      app: [css],
    },
  },
  js: {
    importPath: {
      common: [
        vo + "components/jquery/jquery.js",
        vo + "components/jqueryui/jquery-ui.js",
        src_js + "common/**/*",
        src_js + "core/*.js",
      ],
      app: [src_js + "object/*.js"],
    },
    exportPath: {
      common: [js],
      app: [js],
    },
  },
  images: {
    importPath: {
      common: [
        // sass + 'js/common/**/*'
      ],
    },
    exportPath: {
      common: [images],
    },
  },
  webfonts: [
    [vo + "fortawesome/font-awesome/webfonts/**/*", font + "fontawesome"],
    [vo + "webfontkit/roboto/fonts/**/*", font + "roboto"],
    [vo + "webfontkit/open-sans/fonts/**/*", font + "open-sans"],
  ],
};
