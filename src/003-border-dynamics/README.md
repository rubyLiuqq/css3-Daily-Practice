## 对角线条纹边框效果 说明

![对角线条纹边框效果](http://pela5ecqg.bkt.clouddn.com/WechatIMG26.png)

利用 linear-gradient 线性变换实现边框的炫酷，实际上是在最外层父级上增加背景色的方式实现

### 1、box-shadow
属性值，顺序还是蛮重要的：offset-x offset-y blur spread color position;

offset-x 正值为右边阴影，offset-y 为正值时为下边阴影；

blur：阴影的模糊半径

inset: 表示内阴影，没有该数值时为内阴影；

阴影可以重叠显示，利用逗号 ， 隔开。

### 2、linear-gradient
linear-gradient 线性渐变, radial-gradient 径性渐变(圆圈渐变效果)

0deg 向下，90deg 向左， 180deg 向上， 270deg 向右；

利用background-size 设置背景色的大小，

默认的属性background-image:repeat重复，从而实现动态感

1、eg: linear-gradient(40deg, #99CC33, #FF6666,#336699,#FF0033); 运行结果是#99CC33, #FF6666,#336699,#FF0033均匀分布产生的结果，自然默认是均匀的。

2、eg: 不均匀自主控制渐变

background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);

3、background存在多个渐变时，绘制顺序是从后面的开始向前面的绘制的

background: linear-gradient(45deg, #dca 12%, transparent 0, transparent 88%, #dca 0)

linear-gradient(135deg, transparent 37%, #a85 0, #a85 63%, transparent 0)

linear-gradient(45deg, transparent 37%, #dca 0, #dca 63%, transparent 0) #753

4、在宽高为200px的巨型中

linear-gradient(left, red 100px, yellow 150px);
      0-100px 红色；150px-200px为黄色；中间为过渡渐变色

linear-gradient(left, red 50%, yellow 50%); 100px红黄绝对分明的显示

linear-gradient(left, red 50px, yellow 50px, yellow 100px, green 100px)
      相当于给临界设置颜色，临界点50px和100px都是黄色，黄色到黄色的过渡仍然是黄色，因此50px-100px仍然为黄色。