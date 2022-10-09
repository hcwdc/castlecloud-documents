---
order: 6
group:
  order: 4
---

# 事业单位法人证书识别

**简要描述**

- 本接口支持增值税专用发票、增值税普通发票、增值税电子发票全字段的内容检测和识别，包括发票代码、发票号码、打印发票代码、打印发票号码、开票日期、合计金额、校验码、税率、合计税额、价税合计、购买方识别号、复核、销售方识别号、开票人、密码区 1、密码区 2、密码区 3、密码区 4、发票名称、购买方名称、销售方名称、服务名称、备注、规格型号、数量、单价、金额、税额、收款人等字段。

**请求 URL**

```shell
http://api.icuapi.com/openapi/ocr/legalPersonCredential
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
  "BackImageBase64": "",
  "BackImageUrl": ""
}
```

| 参数名 | 必选 | 类型 | 说明 |
| :-- | :-- | :-- | --- |
| BackImageBase64 | 否 | string | 图片的 Base64 值 （与 ImageUrl 必传其一，都传则只使用 ImageUrl） |
| BackImageUrl | 否 | string | 图片的 Url 地址（与 ImageBase64 必传其一，都传则只使用 ImageUrl） |

**返回示例**

```json
{
  "msg": "操作成功",
  "code": 0,
  "data": {
    "RegId": "188080808088",
    "ValidDate": "自2015年03月30日至2020年03月30日",
    "Location": "山东省潍坊市潍城区xxxxxx",
    "Name": "华创信息",
    "LegalPerson": "张三",
    "RequestId": "9dfccc08-81e6-4cd9-9eb2-d171acb24240"
  }
}
```

**返回参数说明**

| 参数名      | 类型   | 说明       |
| :---------- | :----- | ---------- |
| RegId       | String | 注册号     |
| ValidDate   | String | 有效期     |
| Location    | String | 住所       |
| Name        | String | 名称       |
| LegalPerson | String | 法定代表人 |
