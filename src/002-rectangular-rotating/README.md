####  说明

三个大小不同的方框进行旋转

#### CSS 变量
目前CSS变量主要有两种：
  1、变量，可被使用在任意的地方。可使用var()函数使用变量。
    eg：var(--example-variable)会返回--example-variable所对应的值.
  2、自定义属性。这些属性使用 「--*where*」的特殊格式作为名字。
    eg: --example-variable: 20px;即使一个css声明语句。意思是将20px赋值给--example-varibale变量。

**注意：在之前的标准中，自定义属性以var-作为前缀，后来才改成--前缀。**

##### CSS 变量的层叠与作用域
**局部变量会在作用范围内覆盖全局变量，CSS 变量并不支持 !important 声明**
```css
:root{ --mainColor:red; }
div{
  --mainColor:blue;
  color:var(--mainColor);
}
// 结果为 blue
```
使用 CSS变量 时，声明全局CSS变量时 :root 非常实用。语法：  :root { 样式属性 }
``` css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}
```

##### CSS 变量与计算属性 calc( )
```css
:root{ --margin: 10px; }
div{ text-indent: calc(var(--margin)*10); }
// 结果为：100px
```

