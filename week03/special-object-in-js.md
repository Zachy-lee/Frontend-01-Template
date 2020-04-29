> JavaScript 的对象机制并非简单的属性集合 + 原型。

![JavaScript中的对象](https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week03/inobject.png)


 ECMA 标准 ： [150+ 个固有对象](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects) 

# 内置对象

## 内置对象·原生对象 

 内置对象·原生对象我们把 JavaScript 中，能够通过语言本身的构造器创建的对象称作原生对象。在 JavaScript 标准中，提供了 30 多个构造器 



 几乎所有这些构造器的能力都是无法用纯 JavaScript 代码实现的，它们也无法用 class/extend 语法来继承。 

 “特权对象”。 

-  Error: [[ErrorData]]
- Boolean: [[BooleanData]]
- Number: [[NumberData]]
- Date: [[DateValue]]
- RegExp: [[RegExpMatcher]]
- Symbol: [[SymbolData]]
- Map: [[MapData]] 

 函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对象。 
 
 ## 其他特殊对象

 Array：Array 的 length 属性根据最大的下标自动发生变化。

Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。

String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。

Arguments：arguments 的非负整数型下标属性跟对应的变量联动。

模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 。

类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。

bind 后的 function：跟原来的函数相关联 
