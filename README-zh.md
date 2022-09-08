## **1、中文界面配置**

- 首先安装中文插件：`Chinese (Simplified) Language Pack for Visual Studio Code`
- 右下角弹出是否重启vs，点击“yes”
- 有些机器重启后如果界面没有变化，则 点击 左边栏`Manage -> Command Paletet...【Ctrl+Shift+p】`
- 在搜索框中输入“`configure display language`”，回车
- 打开`locale.json`文件，修改文件下的属性 `"locale":"zh-cn"`

```jsx
{
	// 定义 VS Code 的显示语言。
	// 请参阅 https://go.microsoft.com/fwlink/?LinkId=761051，了解支持的语言列表。
	
	"locale":"zh-cn" // 更改将在重新启动 VS Code 之后生效。
}
```

- 重启vs
## **2、插件安装**

为方便后续开发，建议安装如下插件（红色矩形框标记的插件）
- `chinese`：中文简体包
- `Live server`：内置服务器（类似模拟`Tomcat`效果）
- `Vetur`，`Vue-helper`：帮助开发`Vue`
## **3、预览网页**

**以文件路径方式打开网页预览**

- 需要安装`“open in browser”`插件：
文件右键 -> Open In Default Browser

**以服务器方式打开网页预览**

- 需要安装`“Live Server”`插件：

文件右键 -> Open with Live Server

## 安装node.js
## **安装命令行转码工具**

Babel提供babel-cli工具，用于命令行转码。它的安装命令如下：

```bash
npm install --global babel-cli

#查看是否安装成功
babel --version
```
# Webpack安装

## 1、全局安装

```
npm install -g webpack webpack-cli
```

## 2、安装后查看版本号

```
webpack -v
```
# **CSS打包**

## **1、安装 style-loader 和 css-loader**

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器。

首先我们需要安装相关Loader插件，css-loader 是将 css 装载到 javascript；style-loader 是让 javascript 认识css

```
npm install --save-dev style-loader css-loader
```

## ****2、修改webpack.config.js****

```jsx
const path = require("path"); //Node.js内置模块
module.exports = {
    //...,
    output:{},
    module: {
        rules: [  
            {  
                test: /\.css$/,    //打包规则应用到以css结尾的文件上
                use: ['style-loader', 'css-loader']
            }  
        ]  
    }
}
```
## 3、ESLint插件安装
vs code的ESLint插件，能帮助我们自动整理代码格式