
工作原理浏览器|HTTP协议+语法与词法分析（一）

## 从输入URL到到页面呈现，到底发生了什么
- http请求
- html parse
- css computing
- layout 
- render
- bitmap

## 网络基础知识回顾

![网络模型](https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week05/images/4-5-7.jpg)

ISO-OSI七层网络模型
- 应用层 HTTP               
- 表示层 HTTP
- 会话层 HTTP
- -------------
- 传输层 TCP  
- 网络层 Internet
- 数据链路层 4G/5G/WIFI
- 物理层 4G/5G/WIFI


QPS，Queries-per-second）是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准

### TCP/IP 一些基础知识
- 流
- 包
- 端口
- IP地址
- require('net')
- libnet/libcap

传输层的TCP协议
- 建立连接
- 传输数据
- 拥塞控制
- 关闭连接

网络层的IP协议
- IP报文与路由
- 网络层的其他常用协议：ICMP、ARP、RARP
- IPv6版本的区别

TCP/IP 粘包问题

### 常用网络工具
- Telnet、Netcat
- Wireshark
- Homebrew
- Fiddler

### 基于ABNF语义定义的HTTP消息格式

![ABNF](https://github.com/Zachy-lee/Frontend-01-Template/blob/master/week05/images/ABNF.png)

### HTTP
- Request
- Response


### 原生浏览器客户端请求回顾

```
var xhr=new XMLHttpRequest;
xhr.open('get','http://127.0.0.1:8088',true)
xhr.send(null)
xhr.response // ok
xhr.HEADERS_RECEIVED //2
xhr.addEventListener('readystatechange',function(res){
    console.log(`load:xhr.readyState == ${xhr.readyState} ,xhr.status=${xhr.status}`);
})
xhr.onreadystatechange = function () {
    console.log(`readystatechange:xhr.readyState == ${xhr.readyState} ,xhr.status=${xhr.status}`);
}

```