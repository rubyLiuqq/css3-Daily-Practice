## 选取框斜线动画 说明

![选取框斜线动画](http://pela5ecqg.bkt.clouddn.com/WechatIMG46.png)

这项目主要利用 marquee 标签，使内容滚动起来，并利用 transform的旋转来进行，改变视觉原点和 perspective 。

### marquee 标签
`<marquee>` 用来插入一段滚动的文字。你可以使用它的属性控制当文本到达容器边缘发生的事情。
**注意:`<marquee> `元素已经过时，请不要再使用。尽管一些浏览器仍然支持它，但它不是必须的。此外，使用这个元素基本上是你可以对你的用户做最糟糕的事情之一，所以请不要这样做。**
``` html
<!-- 基础： -->
<marquee>啦啦啦，我会移动耶！</marquee>

<!-- 文字移动属性的设置 -->
<!-- 方向 <direction=#> #=left, right -->
<marquee direction=left>我从右向左移！</marquee>
<marquee direction=right>我从左向右移！</marquee>

<!-- 方式 <bihavior=#> #=scroll, slide, alternate -->
<marquee behavior=scroll>我一圈一圈绕着走！</marquee> <P>
<marquee behavior=slide>我只走一次就歇了！</marquee> <P>
<marquee behavior=alternate>我来回走耶！</marquee>

<!-- 循环 <loop=#> #=次数；若未指定则循环不止(infinite) -->
<marquee loop=3 width=50% behavior=scroll>我只走 3 趟哟！</marquee> <P>
<marquee loop=3 width=50% behavior=slide>我只走 3 趟哟！</marquee> <P>
<marquee loop=3 width=50% behavior=alternate>我只走 3 趟哟！</marquee>

<!-- 速度 <scrollamount=#> -->
<marquee scrollamount=20>啦啦啦，我走得好快哟！</marquee>

<!-- 延时 <scrolldelay=#> -->
<marquee scrolldelay=500 scrollamount=100>啦啦啦，我走一步，停一停！</marquee>

<!-- 外观(Layout)设置 -->
<!-- 对齐方式(Align) <align=#> #=top, middle, bottom 对齐上沿、中间、下沿。 -->
<font size=6>
  <marquee align=# width=400>啦啦啦，我会移动耶！</marquee>
</font>

<!-- 底色 <bgcolor=#> #=rrggbb 16 进制数码，或者是下列预定义色彩： -->
<!-- Black, Olive, Teal, Red, Blue, Maroon, Navy, Gray, Lime, 
Fuchsia, White, Green, Purple, Silver, Yellow, Aqua -->
<marquee bgcolor=aaaaee>啦啦啦，我会移动耶！</marquee>

<!-- 面积 <height=# width=#> -->
<marquee height=40 width=50% bgcolor=aaeeaa> 我会移动耶！</marquee>
```
