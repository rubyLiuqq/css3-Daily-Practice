#### 瞄准文字特效 说明

##### filter 滤镜
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

##### animation 的关键词
infinite

alternate

##### BFC