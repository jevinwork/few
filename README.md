
# 网页前端制作基础环境模板

<i> 此模板仅用于向小伙伴分享前端制作经验，大神可无视此项目。</i>

> 为了更方便快速的进行前端网页设计和集成，制作了一个以Gulp为基础的文件模板结构。主要为了实现自动更新和集成bootstrap，fontawesome，并通过browsersync实现自适应设计的多屏同显。通过使用这个模板，可以很方便的管理网页的样式表、js脚本、图片以及字体文件，并且在修改后，自动刷新前端显示。


## Gulp + Browsersync + Bootstrap + Fontawesome

此文件模板使用**Gulp4**和**ES6**方式制作完成。

Gulp执行文件存放于 ``` src > gulpfiles ``` 下面做下简单介绍

<pre>
📂 src 
  - 📂 gulpfiles
    - gulp-image.js
    - gulp-javascript.js
    - gulp-require.js
    - gulp-scss.js
    - gulp-settings.js
</pre>

1. gulp-settings.js 是**变量文件**，用来设置对应的文件位置和文件结构。<br><br>
2. gulp-require.js 所有使用的**gulp插件和函数**对应文件。被gulpfile.js和其他文件调用，用来调用对应的gulp任务插件。<br><br>
3. gulp-scss.js **scss文件任务模块**：包含 ```commonToCss``` 全局scss和 ```createCss``` 项目scss的编译、压缩、合并任务。也包含了 ``` WebFonts ``` 将``` src > fonts ``` 目录的前端化的**字体移动模块**。<br><br>
4. gulp-javascript  **js文件任务模块**：包含了 ```commonJs``` 和 ```footJs``` 模块，用来制作全局加载的Js脚本和页面底部分别调用的Js脚本，并进行压缩、合并，方便前端调用。<br><br>
5. gulp-image **图片处理模块**：包含了 ``` OutImage ``` 模块，将 ``` src > imgs ``` 目录下的图片文件前端化，``` ImageMini ``` 模块将会把 ``` asssets > images ``` 里的图片文件对应进行压缩减肥。

<div style="min-height:2rem;"> </div>

> 以下是基本的文件结构。

<PRE>
<i style="color:gray;">📂 assets</i>    会自动生成
📂 src       存放style,js,image,font源文件目录
<i style="color:gray;">📂 vendor</i>    会自动生成
    README.md
    composer.json
    favicon.ico
    gulpfile.js     gulp入口文件
    package.json
</PRE>

1. favicon.ico 是一个空ico文件，用来对应网站图标项。
2. composer.json composer安装配置文件

<div style="min-height:2rem;"> </div>

> src目录下已区分文件存放位置，并对应全局文件和项目文件的目录。gulp会自动根据文件的改动重新编译文件到 ``` assets ``` 目录的对应文件夹内，方便前端调用，然后会自动reload browsersync来刷新前端显示。

<pre>
- 📂 src
  - 📂 fonts
  - 📂 gulpfiles
  - 📂 imgs
  - 📂 js
    - 📂 common
      - anime.min.js
      - backtohead.js
    - 📂 core
    - 📂 object
      - application.js
    - js-require.js
  - 📂 scss
    - 📂 app
      - 📂 .mixins
      - 📂 layout
      - 📂 pages
      - 📂 public
      - app.scss
    - 📂 common
      - 📂 modules
        - backtohead.scss
      - 📂 settings
        - _bootstrap.scss
        - _fontawesome.scss
        - _fonts.scss
      - common.scss
</pre>


<div style="min-height:2rem;"> </div>

### 如何使用？

此项目已经发布在composer的安装列表中，可以使用composer来进行安装。

```
composer create-project dooioomoo/few . dev-master
```
> 这个命令可以把few文件模板直接安装在当前目录（使用了“.”作为安装目录，请不要忽略这个“.”），并自动安装所需要的依赖。如果你已经熟悉了这个文件模板，也可以自己增加依赖，并集成到你的项目中去。

> [Composer 安装与使用](https://www.runoob.com/w3cnote/composer-install-and-usage.html)

#### 1. 环境需求

1. **网页制作环境**：
    >我使用的是docker制作的宝塔服务器环境，也可以使用类似xampp应用来搭建您的本地网站服务。目的主要是为了可以通过hosts文件的设置，实现本地域名访问前端网站。因为在 ``` gulp-settings.js``` 文件中，我们将需要设置本地访问域名，来对应 ``` BrowserSync ``` 的自动刷新服务，来实现同时在不同设备显示前端的功能。设置完成后，以确保在浏览器中访问类似 ```http://localhost/index.html ```地址可以访问自己的本地网站。

    >    这里向您推荐： [docker 安装宝塔](https://www.jianshu.com/p/7151e3d11a84) 以及 [docker挂载本地目录并映射端口,生产环境中的docker部署方案(多端口多容器)](https://blog.csdn.net/lishirong/article/details/72763550)

2. **NodeJs环境及Gulp安装**：

    >   首先请[**访问NodeJs官方网站**](https://nodejs.org/zh-cn/)，并下载NodeJs进行安装。Mac的朋友推荐使用 ``` Homebrew``` 进行安装，因为之后的gulp安装及使用大几率会出现权限问题。Homebrew + sudo可以很好的解决这些问题。安装好后，可以打开命令窗口，通过以下命令进行验证，它会出现npm的版本号。

    ``` npm -v ```

    >   安装好NodeJs后，我们需要安装gulp环境。很多人习惯使用package.json来安装环境，因为我习惯使用**全局方式来使用gulp**，一是比较方便，不用每次安装，二是可以尽可能的保持代码目录的整洁性，所以在此不提供package配置，而是尽可能**使用命令方式配置gulp环境**。

    > 在命令窗口输入以下命令。如果是linux或者mac建议使用sudo方式获得权限。
    ```gulp安装
    npm i -global gulp gulp-sass gulp-concat gulp-clean autoprefixer gulp-connect-php gulp-minify merge-stream browser-sync child_process gulp-cssnano gulp-rename gulp-eslint gulp-imagemin gulp-newer gulp-postcss gulp-plumber cssnano imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng
    ```
    >   **安装成功完成后** ，还需要配置以下**系统环境**里的$PATH信息，这里我提供一个快捷设定，你可以把它粘贴到你的命令窗口，并执行，它会自动把对应的路径信息添加到你的**widnows系统**里。

    ```
    rem 安装nodejs全局路径到windows
    setx NODE_PATH %AppData%\npm\node_modules
    rem for current session
    set NODE_PATH=%AppData%\npm\node_modules
    ```
    ```
    rem 安装gulp全局路径到windows
    setx GULP_PATH %AppData%\npm\node_modules\gulp
    rem for current session
    set GULP_PATH=%AppData%\npm\node_modules\gulp

    ```

    > 命令执行成功后，你就可以通过命令窗口，在任何路径下使用gulp以及gulp插件了。到这里gulp全局环境才算配置成功。

 3. **完成以上两项基本配置后**
    
    > 编辑 ``` src > gulpfiles > gulp-settings.js``` 文件，将 ``` const server = "few.so";``` 变量中的 ``` few.so ``` 修改为你的本地域名访问地址。例如：

    ``` const server = "localhost"; ```

    > 或者与hosts文件中对应的域名指向

    ```
    # hosts
    127.0.0.1   mywebsite.com
    ```

    ```
    # gulp-settings.js

     const server = "mywebsite.com"; 
     
     ```

     > 然后通过使用命令行，**进入到你的网站目录** ：*（包含gulpfile.js文件的根目录）* 下，**创建一个index.html文件**，并使用命令

     ```
     gulp watch
     ```
     > 也可以通过你的编辑器（sublime text,microsoft visual studio code,phpstom等）来创建一个默认的gulp任务，任务指令为：**watch**

     > gulp会自动运行BrowserSync，并打开一个```http://localhost:3000```的窗口，显示你的网站。此时如果你在编辑器中对src目录里的style、js、image、font做了修改，系统会自动运行编译任务，并刷新你的浏览器。

     > 接下来可以自由创建自己的页面结构或者vue.js等前端框架系统了。页面所使用的css、js、images等，请调用```assets```目录下的对应文件。

#### 2. gulp任务介绍及目录响应

gulpfile.js文件中，做了模块调用，并设置了**目录监控对象**，（build.gulp.watch）函数对应不同的目录，来执行相对应的编译和输出任务。

为了方便进行局部管理，我制作了几个任务模块，方便在不进行自动编译的情况下，手动编译部分文件。比如增加了新的font，或者图片，或者仅仅对图片进行压缩等操作时，可以独立完成任务。

**任务介绍**

可以通过终端命令直接使用 ``` gulp {任务名} ```

<pre>
1. commonscss
    //编译src/scss/common全局css，并进行合并输出到（assets/css/commin.min.css）
2. appcss
    //编译src/scss/app的css,并进行合并输出到（assets/css/app.min.css）
3. webfont
    //复制src/fonts目录到（assets/fonts/）
4. commonjs
   //编译src/js/common、core全局js,并进行合并输出到（assets/js/common.min.js）
5. appjs
   //编译src/js/object里的文件，生成独立的js文件到（assets/js/{对应文件名}.min.js）
6. imagesMini
   //压缩(assets/images)目录下的所有图像文件，以便提高网站访问速度。
7. watch
   //开发模式，并监视src目录下的scss、js、imgs、fonts目录，并对与修改，作出局部编译、重新合并、输出到assets目录下，并刷新浏览器。
8. default
   //对src目录下大的所有文件进行一次编译和生成。
</pre>

#### 3. gulp-settings.js具体说明

```
// 配置服务器域名：比如 localhost,mysite.local
const server = "few.so";

// 默认BroweserSync的打开端口
const port = "3000";

// 配置依赖目录的路径
const vo = "vendor/";

// 输出文件的根目录
const assetFolder = "assets" + "/";
// css样式表文件输出目录
const css = assetFolder + "css" + "/";
// js脚本输出目录
const js = assetFolder + "js" + "/";
// 图片输出目录
const images = assetFolder + "images" + "/";
// webfont输出目录
const font = assetFolder + "fonts" + "/";

// 源文件根目录
const srcFolder = "src" + "/";
// scss源文件目录
const src_sass = srcFolder + "scss" + "/";
// 图片源文件目录，这里建议不要存放psd等设计源格式文件，因为目标目录会被减肥，这里只存放网页显示用的未减肥图片，防止图片被破坏
const src_img = srcFolder + "imgs" + "/";
// js脚本源文件目录
const src_js = srcFolder + "js" + "/";
// webfont文件
const src_fonts = srcFolder + "fonts" + "/";
// 用来读取最优先js脚本列表
const js_loader = require("../js/js-require.js");
// settings模块数组
module.exports = {
  //各种对应变量，并输出到其他模块
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
  // scss文件的引入和输出指向
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
  // js文件的引入和输出指向
  js: {
    importPath: {
      common: js_loader.list.concat([
        src_js + "common/**/*",
        src_js + "core/*.js",
      ]),
      app: [src_js + "object/*.js"],
    },
    exportPath: {
      common: [js],
      app: [js],
    },
  },
  // 图片的引入和输出指向
  images: {
    importPath: {
      common: [src_img],
    },
    exportPath: {
      common: [images],
    },
  },
  // 字体文件的引入和输出指向
  webfonts: [
    [vo + "fortawesome/font-awesome/webfonts/**/*", font + "fontawesome"],
    [vo + "webfontkit/roboto/fonts/**/*", font + "roboto"],
    [vo + "webfontkit/open-sans/fonts/**/*", font + "open-sans"],
  ],
};

```

1. **数组**
   
    > 数组里用来记录编译的文件，多个的时候：
    ```
      [
          src_sass + "common/common.scss",
          src_sass + "common/other.scss",
          ....
      ]
      ```
    > 用上面的的方式进行多个文件的加载
      
2. **scss文件说明**
    > scss文件分为```common```全局和```app```项目两个目录，任务编译时，不会编译子目录里的文件，只会通过数组设定的文件，进行索引式编译。其他的scss文件请在```common.scss```或者```app.scss```文件中使用 ```@import```的方式引入。
3. **js文件说明**
    > js文件分为三个目录，分别是：common(全局js)、core(核心)、object(分散调用)。优先次序为common>core>object。

    > **js-require.js**：是一个js源手动设定模块，它和common、core、object没有关系，但是会加载在他们三个目录所有js**之前**，主要为了方便调用诸如jquery、vue.js等框架型脚本来使用。可以根据需要，自己安排文件的加载位置和先后顺序。gulp会优先读取这里的js，并合并到```assets/js/common.min.js```文件中去。 

4. **webfont不同数组方式**
    > 由于webfont存放时可能会被同名覆盖，所以推荐以独立目录方式存放fonts文件。比如

    ```
    - 📂 src
       - 📂 fonts
         - 📂 roboto
         - 📂 opensans
         - 📂 fontawesome
         - ...
    ```
    > 因此webfont模块的数组需要具备独立的import路径和export路径，方便设定。
    数组格式为：

    ```
     webfonts: [
        [输入路径, 输出路径],
    ],
    ```
    >   按照以上方式增加fonts的文件安排即可。


