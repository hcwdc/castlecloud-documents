---
order: 4
group:
  order: 4
---

# 营业执照识别

**简要描述**

- 本接口支持快速精准识别营业执照上的字段，包括统一社会信用代码、公司名称、经营场所、主体类型、法定代表人、注册资金、组成形式、成立日期、营业期限和经营范围等字段。

**请求 URL**

```shell
http://api.icuapi.com/openapi/ocr/bizLicense
```

**请求方式**

- POST

**返回类型**

- JSON

**Query 参数**

暂无

**Body 参数**

```json
{
  "ImageBase64": "",
  "ImageUrl": ""
}
```

| 参数名      | 必选 | 类型   | 说明                                                              |
| :---------- | :--- | :----- | ----------------------------------------------------------------- |
| ImageBase64 | 否   | string | 图片的 Base64 值 （与 ImageUrl 必传其一，都传则只使用 ImageUrl）  |
| ImageUrl    | 否   | string | 图片的 Url 地址（与 ImageBase64 必传其一，都传则只使用 ImageUrl） |

**返回示例**

```json
{
  "msg": "操作成功",
  "code": 0,
  "data": {
    "RegNum": "91370702MA3CFQ7C9U",
    "Name": "潍坊华创信息技术有限公司",
    "Capital": "壹佰壹拾贰万元整",
    "Person": "孙余伟",
    "Address": "山东省潍坊高新区新城街道金马社区健康东街10179号软件园置城世贸中心A座12层1207-2室",
    "Business": "计算机软件开发;网络技术、多媒体技术的研发;网站建设;信息系统集成服务:设计、制作(不含户外广告)、代理、发布广告;组织策划文化艺术交流活动;企业形象策划:增值电信业务.(依法须经批准的项目,经相关部门批准后方可开展经营活动)",
    "Type": "有限责任公司(自然人投资或控股)",
    "Period": "2016年08月24日至长期",
    "ComposingForm": "",
    "SetDate": "2016年08月24日"
  }
}
```

**返回参数说明**

| 参数名        | 类型   | 说明                                   |
| :------------ | :----- | -------------------------------------- |
| RegNum        | String | 统一社会信用代码（三合一之前为注册号） |
| Name          | String | 公司名称                               |
| Capital       | String | 注册资本                               |
| Person        | String | 法定代表人                             |
| Address       | String | 地址                                   |
| Business      | String | 经营范围                               |
| Type          | String | 主体类型                               |
| Period        | String | 营业期限                               |
| ComposingForm | String | 组成形式                               |
| SetDate       | String | 成立日期                               |
