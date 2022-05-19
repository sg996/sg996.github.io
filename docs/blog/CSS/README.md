# CSS 笔记

::: tip 学习资料

- [CSS 2020](https://2020.stateofcss.com/zh-hans/)
- [CSS 2021](https://2021.stateofcss.com/zh-Hans/)
- [CSS 专业技巧](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-CN)
- [You-need-to-know-css](https://lhammer.cn/You-need-to-know-css/#/zh-cn/)
- [CSS Inspiration -- CSS 灵感](https://chokcoco.github.io/CSS-Inspiration/)
- [CSS Tricks](https://qishaoxuan.github.io/css_tricks/)

:::

## 001\_空元素设置占位符

```css
:empty::before {
   content: "-";
}
```
## 002\_文本省略号

```css
/* 单行文本 */ 
p {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* 多行文本 */ 
p {
    display: -webkit-box;
    /* autoprefixer: off */ /* webpack 打包兼容问题 */
    -webkit-box-orient: vertical; /*设置方向*/
    /* autoprefixer: on */
    -webkit-line-clamp: 2; /*设置超过为省略号的行数*/
    overflow: hidden;
    word-break: break-all; /* 处理字母数字折行*/ 
}
```

## 003\_去除行内元素左右间隙

- 父元素设置`font-size:0;`
- 元素设置`float: left;`
- 元素设置`display: table-cell;`

## 004\_去除 img 底部间隙

- 父元素设置`font-size:0;`
- 元素设置`vertical-align: bottom;`
- 元素设置`display: block;`或者`display: flex;`

## 005\_纯英文、数字文本自动换行处理（默认不换行）

- 设置`word-break: break-all;`