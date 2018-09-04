#### 动画版的充电装载机 说明

##### 使用 currentColor 扩展颜色级联
    currentColor 只可以在能够接受<color>值的地方使用;当前的标签所继承的文字颜色

    currentColor 的值和当前color属性的值是一样的，可实现「图形跟随文字颜色状态同时变化」
    作用：在一个地方更改想要应用到这多个地方的颜色

##### background: #00FF00 url(xxxxxx) no-repeat fixed top;
> background-position：背景图像的位置，左上角；
> background-repeat：如何重复背景图像
> background-origin：背景图片的定位区域；
>         padding-box	  背景图像相对于内边距框来定位。
>         border-box	  背景图像相对于边框盒来定位。
>         content-box	  背景图像相对于内容框来定位。
> background-clip：背景的绘制区域
> background-attachment：背景图像是否固定或者随着页面的其余部分滚动。
>         scroll	  默认值。背景图像会随着页面其余部分的滚动而移动。
>         fixed	    当页面的其余部分滚动时，背景图像不会移动。
>         inherit	  规定应该从父元素继承 background-attachment 属性的设置。

##### font-size
    本案例使用了 font-size 放大了外围div的大小。本质还在探究中。。。。。。。。

    可能是 line-height
  

