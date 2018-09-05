## 按钮文本交错滑动效果 说明

![按钮文本交错滑动效果](http://pela5ecqg.bkt.clouddn.com/WechatIMG25.png)

该样式采用了H5的自定义 `data-*` 的方法，在css中利用伪类重新书写 「button」 值

1、box 展现的为 伪类 的text信息，原本的text信息已被平移到 box 上下

2、hover 时，定义 span 平移到原位，odd 的相对原本的 向上平移；even 的相对原本的 向下平移

3、所有的移动效果可去除 box中的 overflow 观看到

### data-*


### transform

