# 工具链
### 工具
- 初始化
  - yeoman
  - cerate-react-app
  - vue-cli
- 打包构建
  - webpack
  - gulp
  - grunt
  - fis
  - compass
- 开发/调试
  - dev-tool/chrome
  - webpack-dev-server
  - mock
  - wireshark
  - charles
  - http-server
  - vite
- 测试
  - mocha
  - jest
- 发布
  - jenkins
  - gitlab CI/CD
- 代码效验
  - lint
- 项目仓库
  - git
  - gitlab
  - gitee
- 抓包工具
  - wireshark
  - charles
  - fiddler


# app vue react angular 安装

## vue 


- 先全局安装 npm install -g @vue/cli-service-global
- 新建一个项目：vue create vue-app
- vue ui图形界面 
- 启动服务：npm run serve

## react

- npm install -g create-react-app
- 构建一个my-app的项目:
npx create-react-app my-app
  - 安装报错：Hostname/IP does not match certificate's altnames: Host: registry.cnpmjs.org. is not in the cert's altnames: DNS:r.cnpmjs.org
  - 处理：npm config set registry http://registry.npmjs.org/
## angular

- npm install -g @angular/cli

- create:ng new my-app

- open 
  - cd my-app
- start
  - ng serve --open




# 其他

## 闭包
- 闭包可以代替递归 数学可以证明

```
function gen(a){
  return 
}


((f)=>{

})()

(g=>
  (f=>f(f))(
  self=>g((...args)=>self(self).apply(this,args))
  ))(
      self=>{
        return n=> n>0 ? self(n-1)+n:0
        }
)(100) 

// 得到 5050

```


## 
yeoman
- 全局安装 npm install -g yo
- yo xxx
