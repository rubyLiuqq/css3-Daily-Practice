## 螺旋颗粒动画 说明

![螺旋颗粒动画](http://pg8mlf6c2.bkt.clouddn.com/WechatIMG224.png)

PARTICLES_PER_CIRCLE 为散列的数量
CIRCLES 为圈数
在css中，对每一个div进行分别到不同的角度，使用 rotate(calc(var(--n) / var(--particles-per-circle) * -360deg));
其中延迟的时间，和圈数以及散列的数量有关。
