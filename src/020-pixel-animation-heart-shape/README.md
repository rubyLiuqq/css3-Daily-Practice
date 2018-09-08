## 像素拼成的心形 说明

![像素拼成的心形](http://pela5ecqg.bkt.clouddn.com/WechatIMG38.png)

### nth-of-type 和 nth-child
  ele:nth-of-type(n): 指父元素下第n个ele元素。

  ele:nth-child(n): 指父元素下第n个元素且这个元素为ele，若不是，则选择失败。

### grid 网格布局
#### Grid Container 的全部属性：

  display | grid-template-columns | grid-template-rows | grid-template-areas | grid-template | grid-column-gap | grid-row-gap | grid-gap | justify-items | align-items | justify-content | align-content | grid-auto-columns | grid-auto-rows | grid-auto-flow | grid

- grid-template-columns / grid-template-rows: 使用以空格分隔的多个值来定义网格的列和行
  ``` css
  .container {
    grid-template-columns: 40px 50px auto 50px 40px;
    grid-template-rows: 25% 100px auto;

    /* 给网格线指定确切的命名 */
    grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

    /* 一个网格线可以有不止一个名字 */
    grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];

    /* 若定义中包含重复的部分，则可以使用repeat() 符号来简化写法 */
    grid-template-columns: repeat(3, 20px [col-start]) 5%;
    grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;

    /* “fr”单位允许您将轨道大小设置为网格容器自由空间的一部分 */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 50px 1fr 1fr;
  }
  ```
  ![grid] (http://pe7k320h3.bkt.clouddn.com/3913326678-5a659395474f2_articlex.jpeg)


- grid-template-areas：通过引用 grid-area属性指定的网格区域的名称来定义网格模板。
  ``` css
  /* <grid-area-name> - 使用 grid-area 属性设置的网格区域的名称 */
  /* . - 点号代表一个空网格单元 */
  /* none - 没有定义网格区域 */
  .item-a {
    grid-area: header;
  }
  .item-b {
    grid-area: main;
  }
  .item-c {
    grid-area: sidebar;
  }
  .item-d {
    grid-area: footer;
  }

  .container {
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: auto;
    grid-template-areas:  "header header header header"  "main main . sidebar" "footer footer footer footer";
  }
  ```

  ![grid-template-areas](https://image-static.segmentfault.com/354/130/3541302653-5a65939515d89)

- grid-template: 定义 grid-template-rows、grid-template-columns、grid-template-areas 的简写。
    `grid-template: none | subgrid | <grid-template-rows> / <grid-template-columns>;`
  ``` css
  /**
  * none： 将三个属性都设置为其初始值
  * subgrid：把 grid-template-rows 和 grid-template-columns 设置为 subgrid, 并且 grid-template-areas 设置为初始值。
  * grid-template-rows / <grid-template-columns： 把 grid-template-columns 和 grid-template-rows 设置为指定值, 与此同时, 设置grid-template-areas 为 none
  **/
  .container {
    grid-template: [row1-start] "header header header" 25px [row1-end] [row2-start] "footer footer footer" 25px [row2-end] / auto 50px auto;

    /* 相当于 */
    grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
    grid-template-columns: auto 50px auto;
    grid-template-areas: "header header header" "footer footer footer";
  }
  ```

- grid-column-gap / grid-row-gap：设置列/行之间的间距的宽度。
- grid-gap： grid-row-gap 和 grid-column-gap 的缩写。
- justify-items： 沿着行轴对齐grid item 里的内容。
- align-items： 沿着列轴对齐grid item 里的内容。
- justify-content：和flex 类似。
- align-content： 和 justify-content 相对，竖项的。
- grid-auto-columns / grid-auto-rows

#### Grid Items 的全部属性
  grid-column-start | grid-column-end | grid-row-start | grid-row-end | grid-column | grid-row | grid-area | justify-self | align-self

### HTML
`A>B` 表示选择A元素的所有子B元素。

`A B` 选择所有后代元素，而`A>B`只选择一代。

`A+B` 表示HTML中紧随A的B元素。

`A~B` A之后出现的所有B元素。

`A + B` 这个“+”是选择相邻兄弟，叫做"相邻兄弟选择器"
