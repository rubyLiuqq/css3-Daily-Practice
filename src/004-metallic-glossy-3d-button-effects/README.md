## 具有3D金属光泽的按钮效果 说明

![具有3D金属光泽的按钮效果](http://pela5ecqg.bkt.clouddn.com/WechatIMG27.png)

### CSS3 玩转3D
**可以参考004-1来说明3D效果**
需要了解：透视(perspective)、旋转(rotate)和移动(translate)

- perspective透视: 眼睛离物体的距离，即由远即小，由近即大的感觉，可用该值进行设置；
- perspective-origin： 眼睛的视线。
    默认值perspectice-origin: 50% 50%,第一个数值是 3D 元素所基于的 X 轴，第二个定义在 y 轴上的位置。
    ![perspectice-origin](http://pe7k320h3.bkt.clouddn.com/cfc39554cf565dd7444ab19611c4587.jpg)
- transform-style：默认是flat，如果你要在元素上视线3D效果的话，就必须用上transform-style: preserve-3d,否则就只是平面的变换，而不是3D的变换

### 光泽度使用before 实现，通过hover时改变 left 实现


