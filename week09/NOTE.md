## animation
- animation-name 动画的名称，这是一个 keyframes 类型的值（keyframes 产生一种数据，用于定义动画关键帧）；
- animation-duration 动画的时长；
- animation-timing-function 动画的时间曲线；
- animation-delay 动画开始前的延迟；
- animation-iteration-count 动画的播放次数；
- animation-direction 动画的方向

帧率
- 24帧率
- 48帧无操作OK
- 游戏60帧刷新频率

```
@keyframes 
mykf {
 0% { top: 0; } 
 50% { top: 30px; }
  75% { top: 10px; } 
  100% { top: 0; }
  } 
```
有时候我们会把 transition 和 animation 组合，抛弃 animation 的 timing-function，以编排不同段用不同的曲线。

## transition

- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟

## 贝塞尔曲线

### 概念：

贝塞尔曲线是一种插值曲线，它描述了两个点之间差值来形成连续的曲线形状的规则。一个量（可以是任何矢量或者标量）从一个值到变化到另一个值，如果我们希望它按照一定时间平滑地过渡，就必须要对它进行插值。 

### 历史、特点

建筑设计和工业设计上应用多年的“平滑”曲线

```
cubic-bezier(x1,y1, x2,y2)
```

cubic-bezier :https://cubic-bezier.com/#.17,.67,.83,.67

一次贝赛尔曲线：两个点

二次贝赛尔曲线：三个点  控制点、起点、终点三次贝塞尔曲线：业界常用

- ease:变换自然，适合位移类
- linear:一般不用
- esse-in:适合退出
- esse-out:适合进入

CSS3贝塞尔起点是`0,0`; 终点是`1, 1`;

- `cubic-bezier(x1,y1, x2,y2)`SVG：
- ``canvas：`ctx.moveTo(0,0);
- ctx.bezierCurveTo(x1,y1,x2,y2,1,1);`
- CMYK:颜料反色,打印色、 青 、 品红、黄
- RGB
- :HSL:
	- 色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
	- 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。明度（V），
	- 亮度（L），取0-100%。



### 关于图形绘制

- 不推荐:用border等来绘制三角形五角星等属于奇技淫巧

- 推荐:data uri + svg


### 贝赛尔曲线拟合抛物线

```
<!DOCTYPE html>
<html>


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Simulation</title>
    <style>
        .ball {
            width: 10px;
            height: 10px;
            background-color: black;
            border-radius: 5px;
            position: absolute;
            left: 0;
            top: 0;
            transform: translateY(180px);
        }
    </style>
</head>


<body>
    <label>运动时间：<input value="3.6" type="number" id="t" />s</label><br />
    <label>初速度：<input value="-21" type="number" id="vy" /> px/s</label><br />
    <label>水平速度：<input value="21" type="number" id="vx" /> px/s</label><br />
    <label>重力：<input value="10" type="number" id="g" /> px/s²</label><br />
    <button onclick="createBall()">来一个球</button>
    <script>
        function generateCubicBezier(v, g, t) {
             var a = v / g; 
             var b = t + v / g; 
             return [[(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)], [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]]; }


        function createBall() {
            var ball = document.createElement("div");
            var t = Number(document.getElementById("t").value);
            var vx = Number(document.getElementById("vx").value);
            var vy = Number(document.getElementById("vy").value);
            var g = Number(document.getElementById("g").value);
            ball.className = "ball";
            document.body.appendChild(ball)
            ball.style.transition = `left linear ${t}s, top cubic-bezier(${generateCubicBezier(vy, g, t)}) ${t}s`;
            setTimeout(function () {
                ball.style.left = `${vx * t}px`; ball.style.top = `${vy * t + 0.5 * g * t * t}px`;
            }, 100);
            setTimeout(function () { document.body.removeChild(ball); }, t * 1000);
        }
    </script>
</body>


</html>
```

