## 彗星旋转装载机 说明

![彗星旋转装载机](http://pela5ecqg.bkt.clouddn.com/WechatIMG42.png)

先利用外围的face 节点构造 半弧，再在circle中定义位置，利用 transform: rotate(calc(var(--deg) - 45deg));计算出点的位置；

最后在circle的伪元素中创建“点”
