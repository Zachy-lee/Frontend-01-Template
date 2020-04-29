> 按照 ECMAScript 标准，一些特定语句（statement) 必须以分号结尾。分号代表这段语句的终止。但是有时候为了方便，这些分号是有可以省略的。这种情况下解释器会自己判断语句该在哪里终止。这种行为被叫做 “自动插入分号”，简称 ASI (Automatic Semicolon Insertion) 。实际上分号并没有真的被插入，这只是个便于解释的形象说法。

## 变量提升
 关键词：
 - var 提升的是定义而非赋值。  let const 行为比较;
 - try catch finnal return语句

## 面向对象 vs javascript面向对象
### javascript是基于原型的面向对象，
### 而class等关键之其实是语法糖，背后的原理还是原型继承关系，不必强行把javascript 往其他基于类的面向对象方向上理解和设计。

###  async 是 promise的语法糖
### 注意async可以实现一个异步的Generator（可迭代协议与迭代器协议）
### for await of 异步迭代
