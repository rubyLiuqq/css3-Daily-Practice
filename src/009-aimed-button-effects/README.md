## 瞄准文字特效 说明

### filter 滤镜
filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

- blur(px)：给图像设置高斯模糊，值越大越模糊；不接受百分比。
- brightness(%)：给图片应用一种线性乘法，使其看起来更亮或更暗。0%为图像会全黑；100%则图像无变化；可大于100%。
- contrast(%)： 调整图像的对比度。0%为图像会全黑；100%则图像无变化；可大于100%。
- drop-shadow(h-shadow v-shadow blur spread color)：
- grayscale(%)：将图像转换为灰度图像。0%-100%，0表示没变化。
- hue-rotate(deg)： 给图像应用色相旋转。0deg，则图像无变化，360deg表示一圈。
- invert(%)：反转输入图像。0%-100%，0表示没变化，100%完全反转。
- opacity(%)：转化图像的透明程度。0%-100%，0%则是完全透明，100%表示无变化。
- saturate(%)：转换图像饱和度。0%是完全不饱和，100%表示无变化。可大于100%。
- sepia(%)：将图像转换为深褐色。0%-100%，0表示没变化，100%完全是深褐色。
- url()：URL函数接受一个XML文件，该文件设置了一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。
    eg：filter: url(svg-url#element-id)

### animation 的关键词
animation: name duration timing-function delay iteration-count direction;
- animation-duration:	        完成动画所花费的时间，以秒或毫秒计。
- animation-timing-function:	动画的速度曲线。
- [x] linear:	                动画从头到尾的速度是相同的。
- [x] ease:	                  默认。动画以低速开始，然后加快，在结束前变慢。
- [x] ease-in:	              动画以低速开始。
- [x] ease-out:	              动画以低速结束。
- [x] ease-in-out:	          动画以低速开始和结束。
- [x] cubic-bezier(n,n,n,n):	在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
- [x] steps([nums], [type]):  阶跃函数，其中type可为start和end
- animation-delay:	          在动画开始之前的延迟。
- animation-iteration-count:	动画应该播放的次数。
- [x] n:          定义动画播放次数的数值。
- [x] infinite: 	规定动画应该无限次播放。
- animation-direction:	      是否应该轮流反向播放动画。
- [x] normal：    	默认值。动画应该正常播放。
- [x] alternate： 	动画应该轮流反向播放。

### BFC