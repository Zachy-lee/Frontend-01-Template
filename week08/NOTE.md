

## 正常流排版


- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布

## 外边距折叠三种情况

外边距折叠只发生在文档常规文本流中块级盒子的垂直方向上。行内盒子、浮动盒子或者绝对定位盒子的外边距不会折叠

- 上下外边距
- 父子同外边距
- 同一个元素上下边距

## 术语解析

当元素在水平或垂直方向排布时，它们之间如何相互影响，css有几套不同的规则，其中一套叫做格式化上下文：formatting context 

IFC：inline formatting context

BFC：block formatting context

## BFC说明：

如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。
- block-level 表示可以被放入 bfc
- block-container 表示可以容纳 bfc
- block-box = block-level + block-container
- block-box 如果 overflow 是 visible， 那么就跟父 bfc 合并

### 建立元素内部的BFC
- display 属性值设置为inline-block 或 table-cell 之类的元素
- float 属性值不是none的元素
- 绝对定位的元素 ,position:absolute
- overflower 属性值不是visible的元素

## 选择器伪类与伪元素
CSS选择器一般不支持往父及寻找 避免回溯，这是排版渲染机制决定
### 伪类
- :any-link.

- :link :visited (link没访问的 visited访问过的) 跟超链接相关的选择器

- :hover 

- :active 

- :focus

- :target

- Active 和 focus 既可以键盘触发也可以鼠标触发，hover只可以被鼠标触发，target 如果当锚点用会有target

树结构

- :empty
- :nth-child()
- :nth-last-child()
- :first-child :last-child :only-child

### 伪元素

- ::before 

- ::after 

- ::first-letter

font系列

color系列

background系列

word-spacing

letter-spacing

text-decoration

text-transform

line-height

float

vertical-align

盒模型系列: margin padding border

::first-line

font系列

color系列

background系列

word-spacing

letter-spacing

text-decoration

text-transform

line-height

## css通用布局

- table 远古时代
- 弹性盒模型 Flex（Flexible Box Layout Module）  
- 网格布局 Grid(Grid layout)
- 多栏布局 (Multi-column Layout Module)
- Region CSS Regions Modudle Level 1 实现内容在不同元素间的灌文接排
