## 蚊香 说明

![蚊香](http://pela5ecqg.bkt.clouddn.com/WechatIMG67.png)

本项目都是一个个矩形盒子堆积成，奇数时去掉 border-bottom，偶数时去掉 border-top ,并利用不同的 border-radius 构造弧形。

## align-items、justify-content 和 align-self
1、align-items 为justify-content的补充属性,为flex item在非flex-direction指定的另一轴线的位置
- flex-start(default)
- flex-end
- center

2、justify-content 用于改变flex容器中flex item在轴线上的位置
- flex-start(default,从axies start开始紧靠排列)
- flex-end(axies end端紧靠排列) 
- center(展现如其名,axies中间)
- space-between(相当于将空间等分,每份空间中flex-start排列)
- space-around(空间等分,每份空间中center排列)

3、align-self 用于覆盖Flex容器中的align-items属性,它有和align-items相同的属性值
- auto (继承align-items属性,无父元素则等同于stretch)
- stretch （元素被拉伸以适应容器）
- flex-start （元素位于容器的开头）
- flex-end （元素位于容器的结尾）
- center （元素位于容器的中心）
- baseline （元素位于容器的基线上）

## border-radius
```css
  border-radius: 2em 1em 4em / 0.5em 3em;
  /* 等价于 */
  border-top-left-radius: 2em 0.5em;
  border-top-right-radius: 1em 3em;
  border-bottom-right-radius: 4em 0.5em;
  border-bottom-left-radius: 1em 3em;
```
