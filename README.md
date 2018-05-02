# lite-component

一种轻量级的前端组件开发方式。

每个组件既可以通过npm+git的方式版本迭代、模块化使用，又可以通过`npm run build`命令打包成独立的[umd](https://github.com/umdjs/umd)模块的js文件。

## 编写组件

在`src`目录中改写指定的`template.ejs`、`style.scss`、`init.js`、`config.json`文件。

详见[README.md]('./src')。

## 打包组件

运行`npm install`后，运行`npm run build`。
