# 每周总结可以写在这里


# https://webpack.js.org/contribute/writing-a-loader/
# https://html.spec.whatwg.org/multipage/parsing.html#tokenization


## css 动画暂停
 
###  animation动画状态
animation-play-state:paused;

### transition动画 暂停位置处理
getComputedStyle(el)


### 走GPU处理 translate 3D 

## timing function 设计 及bezier以time为入参，以progression为出参

## 浏览器里c++代码分析 cubic-bezier 
  webpack源码
  牛顿积分
###  参考链接


https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation

http://en.wikipedia.org/wiki/Newton’s_method

https://cubic-bezier.com/#.25,.1,.25,1


### 小tip
void 0 与 undefined的区别

- undefined可以被重写
- void 0计算返回 undefined 不能被重写且表达式最短