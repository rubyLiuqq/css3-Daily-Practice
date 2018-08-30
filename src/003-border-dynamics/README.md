####  说明

利用 linear-gradient 线性变换实现边框的炫酷，实际上是在最外层父级上增加背景色的方式实现

##### 1、box-shadow：
属性值，顺序还是蛮重要的：offset-x offset-y blur spread color position;
offset-x 正值为右边阴影，offset-y 为正值时为下边阴影；
blur：阴影的模糊半径
inset: 表示内阴影，没有该数值时为内阴影；
阴影可以重叠显示，利用逗号 ， 隔开。

##### 2、linear-gradient：
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction

##### 3、background： 
利用background-size 设置背景色的大小，从而实现动态感
