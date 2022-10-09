---
order: 1
group:
  order: 6
---

# 文档预览

**功能说明：**

- 本功能支持对多种文档类型的文件生成 HTML 格式预览，满足 PC、App 等多个用户端的文档在线浏览需求，适用于在线教育、企业 OA、在线知识库、网盘文档预览等业务场景。

- 调用流程：使用预览专用的文件上传接口获取到文件的 id，即可使用预览接口

## 一、文件上传

**请求 URL：**

- `http://api.icuapi.com/open/oss/uploadToPreview`

**请求方式：**

- Post

**返回类型**

- JSON

**参数：**

| 参数名 | 必选 | 类型 | 说明         |
| :----- | :--- | :--- | ------------ |
| upfile | 是   | File | 要预览的文件 |

**返回示例**

```
  {
    "msg": "操作成功",
    "code": 0,
    "data": {
        "id": "1340000000000000000",
    }
}

```

**返回参数说明**

| 参数名 | 类型 | 说明    |
| :----- | :--- | ------- |
| id     | Long | 文件 id |

## 二、文档预览

**说明：**

- 此接口不使用公共接口参数

**请求 URL：**

- `http://api.icuapi.com/op/preview/html`

**请求方式：**

- 预览地址放入浏览器地址栏请求

**返回类型**

- Html

**Query 参数：**

| 参数名         | 必选 | 类型   | 说明                           |
| :------------- | :--- | :----- | ------------------------------ |
| id             | 是   | String | 对应的文件 ID                  |
| watermark      | 否   | String | 水印文字                       |
| watermarkStyle | 否   | String | 水印颜色 如:rgb(192,192,192,1) |

**返回示例**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no"
    />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <meta name="keywords" content="数据万象,文档预览" />
    <meta name="description" content="" />
    <title>腾讯云-数据万象-文档预览</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html,
      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        padding: 0;

        touch-action: manipulation;
      }

      iframe {
        flex: 1;
      }
    </style>
  </head>

  <body>
    <script src="https://previewcdn.myqcloud.com/weboffice/jssdk/jquery-3.5.1.min.js"></script>
    <script src="https://previewcdn.myqcloud.com/weboffice/jssdk/polyfill.min.js"></script>
    <script src="https://previewcdn.myqcloud.com/weboffice/jssdk/web-office-sdk-v1.1.5.umd.js"></script>
    <script>
      var token = 'preview_token';
      var expiresIn = '3000';
      var PREVIEW_URL = 'https://prvsh.myqcloud.com/office/p/***';

      var instance = WebOfficeSDK.config({
        mount: document.querySelector('body'),
        mode: 'simple',
        url: PREVIEW_URL,

        commonOptions: {
          isShowTopArea: true,
          isShowHeader: true,
        },

        cooperUserAttribute: {
          isCooperUsersAvatarVisible: false,
        },
      });

      instance.on('fileOpen', function (data) {
        console.log('success');
      });
    </script>
  </body>
</html>
```
