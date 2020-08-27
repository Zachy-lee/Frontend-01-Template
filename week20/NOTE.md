- 无头浏览器PhantomJS
https://phantomjs.org/download
- 检查渲染结果

安装：exe直接拷进node的文件夹

- 调试环境
https://phantomjs.org/quick-start.html

- render图片：
```
var page = require('webpage').create();
page.open('http://www.baidu.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('baidu.png');
  }
  phantom.exit();
});
```
- 获取网页title
```
var page = require('webpage').create();
page.open('http://www.baidu.com', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        var title = page.evaluate(function() {
            return document.title;
        });
        console.log(title);
    }
    phantom.exit();
});
```
- 测试
- 启动local server
- 对其中的元素assert断言
- 页面渲染出来的DOM结构：
```
var page = require('webpage').create();
page.open('http://baidu.com', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        var body = page.evaluate(function() {
            var toString = function(pad, element) {
                var children = element.children;
                var childrenString = '';
                for(var i = 0; i < element.children.length; i++){
                    childrenString += toString("  " + pad, element.children[i]) + "\n";
                }
                return pad + element.tagName + (childrenString ? "\n" + childrenString : "")
            }
            return toString("", document.body);
        });
        console.log(body);
    }
    phantom.exit();
});
``` 
- PhantomJS Mocha https://github.com/nathanboktae/mocha-phantomjs https://www.npmjs.com/package/mocha-phantomjs
- eslint
https://eslint.org/docs/user-guide/getting-started 检查code style

https://www.npmjs.com/package/eslint-plugin-react

- 配置.eslintrc.js的rules： https://eslint.org/docs/user-guide/configuring
一般改动rules需要团队通过

- OAuth
https://developer.github.com/v3/#authentication
