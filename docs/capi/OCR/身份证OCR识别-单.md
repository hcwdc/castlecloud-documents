---
order: 2
group:
  order: 4
---

# 身份证识别-单

**简要描述**

- 本接口支持中国大陆居民二代身份证正反面，每次只能识别一面

**请求 URL**

```shell
http://api.icuapi.com/openapi/ocr/idCard
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
  "ImageUrl": "",
  "CardSide": ""
}
```

| 参数名 | 必选 | 类型 | 说明 |
| :-- | :-- | :-- | --- |
| ImageBase64 | 否 | string | 图片的 Base64 值 （与 ImageUrl 必传其一，都传则只使用 ImageUrl） |
| ImageUrl | 否 | string | 图片的 Url 地址（与 ImageBase64 必传其一，都传则只使用 ImageUrl） |
| CardSide | 否 | string | 身份证方向 FRONT:身份证有照片的一面（人像面）,BACK:身份证有国徽的一面（国徽面），不填则自动判断 |

**返回示例**

```json
{
  "msg": "操作成功",
  "code": 0,
  "data": {
    "Nation": "汉",
    "Address": "山东省潍坊市xxxxxxx",
    "Authority": "潍坊市公安局",
    "Sex": "男",
    "Birth": "1996/11/25",
    "Name": "张三",
    "ValidDate": "2013.07.15-2023.07.15",
    "IdNum": "xxxxxxxxxxxxxxxxxx"
  }
}
```

**返回参数说明**

| 参数名    | 类型   | 说明                 |
| :-------- | :----- | -------------------- |
| Name      | String | 姓名（人像面）       |
| Sex       | String | 性别（人像面）       |
| Nation    | String | 民族（人像面）       |
| Birth     | String | 出生日期（人像面）   |
| Address   | String | 地址（人像面）       |
| IdNum     | String | 身份证号（人像面）   |
| Authority | String | 发证机关（国徽面）   |
| ValidDate | String | 证件有效期（国徽面） |

**备注**

- 身份证人像面与国徽面可只传其中之一，返回参数会只有对应的数据
