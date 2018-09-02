#### 3D 说明
**步骤**
- 设置容器的透视以及piece盒子的3D属性；
    结果：只看到第6面，因为还是原位置，重叠；
- 设置旋转方向
    rotateY：沿着Y轴进行3D旋转；
    translateZ：沿着z轴进行平移。translateZ为正的时候，就朝着我们的方向走来。
    结果：六面全部围着立起来；
- animation让3D动起来：
    只要在piece-box上加上旋转动画就行了,5s完成动画，从0度旋转到360度。
    结果：六面体实现了沿着Y轴旋转；
- 正方体组装
    正方体，其实不难实现，首先可以想象一个面，然后去拓展其他面如何去实现，

    另一种旋转方法：比如把正方体的前面translateZ(100px）让它靠近我们100px,然后后面translateZ(-100px）让它远离我们100px,左边是先translateX(-100px再rotateY(90deg),右边就是translateX(100px)再rotateY(90deg),上面是先translateY(-100px)，rotateX(90deg)，下面是先translateY(100px)，rotateX(90deg)。


    animation-fill-mode: forwards; 保持动画最后的效果
    animation: name 5s 10s infinite;  5s是动画时长, 10s是延时时间