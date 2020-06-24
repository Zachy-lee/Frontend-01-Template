
# 一、异步与回调

以交通信号灯为例,由于家境贫寒买不起服务器，所有演示代码皆为github pages，打开慢时请开下vpn,只有少量核心代码，其他请参考源代码

## 1.回调地狱

```
    function go() {
            green()
            setTimeout(function() {
                yellow()
                setTimeout(function() {
                    red()
                    setTimeout(function() {
                        go()
                    }, 500)
                }, 200)
            }, 1000)
        }
```

演示地址： https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week11/light&async/01-callback-hell.html


## 2.promise改进

```
      function go(params) {
            green()
            sleep(10000).then(() => {
                yellow();
                return sleep(2000);
            }).then(() => {
                red();
                return sleep(5000)
            }).then(go)
        }
```
稍显啰嗦
演示地址：https://zachy-lee.github.io/Frontend-01-Template/week11/light%26async/02-promise.html

## 3.async await更进一步简化，更加优雅简洁
```
   async function go(params) {
            let next = document.querySelector('#next')
            while (true) {
                green()
                await happen(next, 'click');
                yellow()
                await happen(next, 'click');
                red()
                await happen(next, 'click');
            }
        }
```
演示地址：https://zachy-lee.github.io/Frontend-01-Template/week11/light%26async/03-async-await.html

## 4.如何手动控制信号灯呢
演示地址：https://zachy-lee.github.io/Frontend-01-Template/week11/light%26async/03-async-await-x1.html

## 5.generator 与 co
```
      function* go() {
            while (true) {
                green();
                yield sleep(1000);
                yellow();
                yield sleep(200);
                red();
                yield sleep(500);
            }
        }


        function run(iterator) {
            let {
                value,
                done
            } = iterator.next()
            if (done)
                return
            if (value instanceof Promise) {
                value.then(() => {
                    co(iterator)
                })
            }
        }

        function co(generaotr) {
            return function() {
                let iterator = generaotr()
                let {
                    value,
                    done
                } = generaotr().next()
                if (done)
                    return
                if (value instanceof Promise) {
                    value.then(() => {
                        co(iterator)
                    })
                }
            }
        }
```
 演示地址：https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week11/light%26async/04-generato-01.html
 
 generator实现不死机的无限循环列表，另外genrator还用在点击抽奖等场景
 
 ```
        function* g() {
            yield 1;
            yield 2;
            yield 3;
        }
        for (v of g()) {
            console.log(v)
        } // 1  2 3


        ///////////////////////////
        // 无限制列表 不死机
        async function* g() {
            let i = 0;
            while (true) {
                await sleep(1000);
                yield i++;
            }
        }
        for await (let v of g()) {
            console.log(v)
        }
 ````
 # 二、寻径问题
 
 演示时请先绘制一些路径障碍，再到控制台输入：findPath(map,[0,0],[50,50]) 其中参数可自己修改 从[0,0]找到[50,50]这个点的路径
 
 ## 1.A* 最优路径算法
 演示地址：https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week11/path/1x-A-star.html
 
 ## 2.二叉堆 BinaryHeap改进算法、一维数数组来标识二叉树更加高效
  演示地址：https://zachy-lee.github.io/Frontend-01-Template/week11/path/1x-BinaryHeap.html
 
 ## 其他比如 dom树diff算法 DP 广度优先与深度优先算法比较、搜索引擎中更高效字典树等
  
  # 三、正则
  
 ## match
 ## replace
 ## exec
 
