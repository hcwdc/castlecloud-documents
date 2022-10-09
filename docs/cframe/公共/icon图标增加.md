---
order: 2
group:
  order: 2
---

# 图标添加

考虑到用户的个性化图标需求，所以我们支持如下两个平台的图标

> Font Awesome：https://fontawesome.dashgame.com
>
> iconfont-阿里巴巴矢量图标库：https://www.iconfont.cn/

## iconfont 图标添加方法（font-class 引用）

拷贝项目下面生成的 fontclass 代码

![iconfont01](https://oss.icuapi.com/docs/openapi/iconfont01.png)

复制链接到 index.html（路径：public\index.html）

![iconfont02](https://oss.icuapi.com/docs/openapi/iconfont02.png)

以添加 `icon_kh_gps` 为例

![iconfont03](https://oss.icuapi.com/docs/openapi/iconfont03.png)

在项目中找到 iconList.js（文件路径：`src/common/iconList.js`）

在 iconList 数组追加`"iconfont icon_kh_gps"`

如下图所示：

![iconfont](https://oss.icuapi.com/docs/openapi/iconfont04.png)

<Alert type="warning">
注：iconfont 不可省略
</Alert>

> 用法详解：
>
> 1、从菜单栏选择使用，需要将图标添加至 `iconList.js` 文件中
>
> 2、页面中调用，直接使用图标的英文名进行调用即可，例如：

## Font Awesome 图标添加方法

在 font awesome 网站找到想要添加的图标

https://fontawesome.dashgame.com/#basic

eg：

添加 bus 图标为例

![Font Awesome01](https://oss.icuapi.com/docs/openapi/Font%20Awesome01.png)

如上图所示，该图标名称为 bus，在项目中找到 iconList.js（文件路径：src/common/iconList.js）

在 iconList 数组追加 "fa fa-bus"

如下图所示

![Font Awesome02](https://oss.icuapi.com/docs/openapi/Font%20Awesome02.png)

> **注：fa fa-不可省略**
