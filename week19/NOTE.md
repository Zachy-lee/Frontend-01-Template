
### 关于writeStream
 ```
   req.pipe(writeStream);

 ```
 等价于以下写法
  ```
     req.on('data',trunk=>{
            writeStream.write(trunk);
    });
    req.on('end',trunk=>{
        writeStream.end(trunk);
    });
 ```
###  no such file or directory 问题处理
- node的路径是以启动服务的路径为基准的,而不是以当前文件的路径为基准.2月前举报


### 思考 node stream做成async await iterator 
封装node stream 可循环访问。

### 参考链接

- express
https://expressjs.com/en/starter/installing.html
http://expressjs.com/
- node
https://nodejs.org/docs/latest-v13.x/api/fs.html
- Ubuntu18.04  https://www.jianshu.com/p/f3dad64d896a
