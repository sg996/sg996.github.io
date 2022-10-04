# VSCode 常见问题

## 001.完美解决： VSCode 中文显示

- 第一步：找到 **`扩展`**，搜索 **`chinese`** 或者 [访问](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)，点击 Install 进行下载，然后重启 VSCode；

- 第二步：<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> 或者 <kbd>&ensp;⌘&ensp;</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>，打开命令行，搜索 **`language`**，选择 **`Configure Display Language`**，再选择 **`zh-cn`** 即可。
  > 参考资料：[完美解决：VSCode 中文显示](https://blog.csdn.net/qq_24118527/article/details/82793610)

## 002.VSCode 中保存后会在当前目录下自动生成 dist 目录

![](https://z3.ax1x.com/2021/08/11/fNfADU.png)

::: danger 产生原因：
[`Sass/Less/Stylus/Pug/Jade/Typescript/Javascript Compile Hero Pro` 中文介绍](https://gitee.com/wscats/compile-hero/blob/master/README.CN.md)
:::

::: tip 解决办法：
关闭 `compile-hero` 插件

- 在设置中搜索 `compile-hero` 插件
- 关闭所有自动生成 dist 目录的选项

:::

::: details 如图所示
![](https://z3.ax1x.com/2021/08/11/fN42j0.png)
![](https://z3.ax1x.com/2021/08/11/fNOqFP.png)
:::

> 参考资料：[VsCode 中 ctrl+s 后会在当前目录下自动生成 dist 目录](https://blog.csdn.net/weixin_38233549/article/details/108226135)

## 003.VSCode 无法更改文件夹名称

::: tip 解决办法：
删除文件内`node_modules`目录，再进行重命名操作。
:::