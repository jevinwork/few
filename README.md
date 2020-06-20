
# 网页前段制作基础环境模板

> 为了更方便快速的进行前端网页设计和集成，制作了一个以Gulp为基础的文件模板结构。主要为了实现自动更新和集成bootstrap，fontawesome，并通过browsersync实现自适应设计的多屏同显。通过使用这个模板，可以很方便的管理网页的样式表、js脚本、图片以及字体文件，并且在修改后，自动刷新前端显示。


## Gulp + Browsersync + Bootstrap + Fontawesome

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

### 如何使用？

#### 1. 环境需求
#### 2. gulp任务介绍
#### 3. 目录响应