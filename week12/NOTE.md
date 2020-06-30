

## LL 算法/实现步骤

### 1.正则分解/也可用状态机

```
/([0-9\.]+)|([ ]+)|([\r\n]+)|(\+)|(\-)|(\*)|(\/)/g

```

### 2.紧接上一步token生成处理
```
    function tokenize(source) {
        var result = null;
        var lastIndex = 0;
        do {
            lastIndex = regexp.lastIndex;
            result = regexp.exec(source);
            if (!result) break;
            for (let i = 0; i <= dictionary.length; i++) {
                if (result[i + 1]) {
                    console.log(dictionary[i]);
                }
                console.log(result[0]);
            }
        } while (result);
    }

```

### 3.MutiplicativeExpression产生式编写

```
function MutiplicativeExpression(){
        if(source[0].type==='Number'){
            let node={
                type:'MutiplicativeExpression',
                children:source.shift()
            }
            source.unshift(node)
            return MutiplicativeExpression(source)
        }
        if(source[0].type==='MutiplicativeExpression' && source.length>1 && source[1].type==='*'){
            let node={
                type:'MutiplicativeExpression',
                children:[source.shift(),source.shift(),source.shift()]
            }
            source.unshift(node)
            return MutiplicativeExpression(source)
        }
        if(source[0].type==='MutiplicativeExpression' && source.length>1 && source[1].type==='/'){
            let node={
                type:'MutiplicativeExpression',
                children:[source.shift(),source.shift(),source.shift()]
            }
            source.unshift(node)
            return MutiplicativeExpression(source)
        }
        if(source[0].type==='MutiplicativeExpression')
            return source[0]
        throw new Error();
    }

```

### 4.AdditiveExpression产生式编写

```
unction AdditiveExpression(source) {
        if (source[0].type === 'Number') {
            MutiplicativeExpression(source)
            return AdditiveExpression(source)
        }
        if (source[0].type === 'MutiplicativeExpression') {
            let node = {
                type: 'AdditiveExpression',
                children: [source.shift()]
            }
            source.unshift(node)
            return AdditiveExpression(source)
        }
        if (source[0].type === 'AdditiveExpression' && source.length > 1 && source[1].type === '+') {
            let node = {
                type: 'AdditiveExpression',
                children: [source.shift(), source.shift()]
            }
            MutiplicativeExpression(source)
            node.children.push(source.shift());
            source.unshift(node)
            return AdditiveExpression(source)
        }
        if (source[0].type === 'AdditiveExpression' && source.length > 1 && source[1].type === '-') {
            let node = {
                type: 'AdditiveExpression',
                children: [source.shift(), source.shift()]
            }
            MutiplicativeExpression(source)
            node.children.push(source.shift());
            source.unshift(node)
            return AdditiveExpression(source)
        }
        if (source[0].type === 'AdditiveExpression')
            return source[0]
    }
```

### 5.Expression编写

```
    function Expression(tokens) {
        if (source[0].type === 'AdditiveExpression' && source[1].type === 'EOF') {
            let node = {
                type: "Expression",
                children: [source.shift(), source.shift()]
            }
            source.unshift(node);
            return node;
        }
        AdditiveExpression(source)
        return Expression(source)

    }

```
## Trie 多叉树

## KMP 长字符串中找子串 O(m+n) 

## WildCard 通配符算法 O(m+n) 

## 正则 字符串通用模式匹配

## 状态机 通用的字符串分析

## LR



## 参考名词：

LR： LR 分析器是一种自底向上（bottom-up）的上下文无关语法分析器。LR 意指由左（Left）至右处理输入字符串，并以最右边优先派生（Right derivation）的推导顺序（相对于 LL 分析器）建构语法树。能以此方式分析的语法称为 LR 语法。而在 LR(k) 这样的名称中，k 代表的是分析时所需前瞻符号（lookahead symbol）的数量，也就是除了目前处理到的输入符号之外，还得再向右引用几个符号之意；省略 （k）时即视为 LR(1)，而非 LR(0)。

LL： LL 分析器是一种处理某些上下文无关文法的自顶向下分析器。因为它从左（Left）到右处理输入，再对句型执行最左推导出语法树（Left derivation，相对于 LR 分析器）。能以此方法分析的文法称为 LL 文法。
