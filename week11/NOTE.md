# 每周总结可以写在这里

# 异步与回调

以交通信号灯为例,由于家境贫寒买不起服务器，所有演示代码皆为github pages，打开慢时请开下vpn,只有少量核心代码，其他请参考源代码

## 回调地狱

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


## promise改进

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

## async await更进一步简化，更加优雅简洁
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

## 如何手动控制信号灯呢
演示地址：https://zachy-lee.github.io/Frontend-01-Template/week11/light%26async/03-async-await-x1.html

## generator 与 co
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
 
 
