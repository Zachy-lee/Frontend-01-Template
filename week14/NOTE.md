
## Webpack 核心概念
### Entry ⽤来指定 webpack 的打包⼊⼝

单⼊⼝：entry 是⼀个字符串
```
module.exports = {
entry: './path/to/my/entry/file.js'}
```

多⼊⼝：entry 是⼀个对象
```
module.exports = {
entry: {
app: './src/app.js',
adminApp: './src/adminApp.js'
}
}
```

###  Output ⽤来告诉 webpack 如何将编译后的⽂件输出到磁盘
```
module.exports = {
entry: './path/to/my/entry/file.js'
output: {
filename: 'bundle.js’,
path: __dirname + '/dist'
}
};
```

### Loaders
webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其它文
件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。
本身是一个函数，接受源文件作为参数，返回转换的结果


### Plugins
插件⽤于 bundle ⽂件的优化，资源管理和环境变量注⼊，作⽤于整个构建过程

### Mode
Mode ⽤来指定当前的构建环境是：production、development 还是 none
设置 mode 可以使⽤ webpack 内置的函数，默认值为 production


## 资源解析：解析 ES6 解析jsx
```
module.exports = {
    entry: './main.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            "@babel/plugin-transform-react-jsx",
                            { pragma: "createElement" }
                        ]
                    ]
                }
            }
        }]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
};
```

### 解析 CSS

css-loader ⽤于加载 .css ⽂件，并且转换成 commonjs 对象
style-loader 将样式通过<style> 标签插⼊到 head 中
  
### 解析 Less 和 SaSS
  
less-loader ⽤于将 less 转换成 css

### 解析图⽚
file-loader ⽤于处理⽂件

### 解析字体
file-loader 也可以⽤于处理字体

### 解析资源
 url-loader
 ### ⽂件监听
 ⽂件监听是在发现源码发⽣变化时，⾃动重新构建出新的输出⽂件
 webpack 开启监听模式，有两种⽅式：
·启动 webpack 命令时，带上 --watch 参数
·在配置 webpack.config.js 中设置 watch: true

### 热更新
webpack-dev-server

### ⽂件指纹

Hash：和整个项⽬的构建相关，只要项⽬⽂件有修改，整个项⽬构建的 hash 值就会更改
Chunkhash：和 webpack 打包的 chunk 有关，不同的 entry 会⽣成不同的 chunkhash 值
Contenthash：根据⽂件内容来定义 hash ，⽂件内容不变，则 contenthash 不变

### 代码压缩

 - js 内置uglifyjs-webpack-plugin
 
 - css optimize-css-assets-webpack-plugin cssnano
 
 - html-webpack-plugin
 
 
## 组件化核心：用恰当的语言去表示 attribute、property、children


##  setTimeout 与 requestAnimationFrame

```

  setTimeout(() => { }, 16) // 16ms为一帧 推荐

``` 

不推荐以下写法

```
  // promise  
  // requestAnimationFrame(() => {
  //     requestAnimationFrame(() => { // 此处必要 与 setTimeout不完全等价
  //         current.style.transition = 'ease .5s'
  //         next.style.transition = 'ease .5s'
  //         current.style.transform = `translateX(${-100 - 100 * position}%)`
  //         next.style.transform = `translateX(${-100 * nextPosition}%)`
  //     })
  // })

```