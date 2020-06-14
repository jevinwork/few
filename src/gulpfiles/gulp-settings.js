const server = "template.so";
const port = "3000";

const assetFolder = "assets" + "/";
const css = assetFolder + "css" + "/";
const js = assetFolder + "js" + "/";
const images = assetFolder + "images" + "/";
const font = assetFolder + "fonts" + "/";

const srcFolder = "src" + "/";
const src_sass = srcFolder + "scss" + "/";
const src_img = srcFolder + "img" + "/";
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
      common: [src_sass + "include/**/*"],
      project: [sass + "*.scss"],
    },
    exportPath: {
      common: [css],
      project: [css],
    },
  },
  js: {
    importPath: {
      common: [sass + "js/common/**/*"],
      foot: [sass + "js/*.js"],
    },
    exportPath: {
      common: [js],
      foot: [js],
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
};
