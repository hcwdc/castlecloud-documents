---
order: 1
group:
  order: 4
---

# 身份证识别-双

**简要描述**

- 本接口支持中国大陆居民二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、签发机关、有效期限，识别准确度达到 99%以上。

**请求 URL**

```shell
http://api.icuapi.com/openapi/ocr/idCardDiscern
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
  "FrontImageBase64": "",
  "FrontImageUrl": "",
  "BackImageBase64": "",
  "BackImageUrl": ""
}
```

| 参数名 | 必选 | 类型 | 说明 |
| :-- | :-- | :-- | --- |
| FrontImageBase64 | 否 | string | 身份证人像面图片的 Base64 值 （与 FrontImageUrl 必传其一，都传则只使用 FrontImageUrl） |
| FrontImageUrl | 否 | string | 身份证人像面图片的 Url 地址（与 FrontImageBase64 必传其一，都传则只使用 FrontImageUrl） |
| BackImageBase64 | 否 | string | 身份证国徽面图片的 Base64 值 （与 BackImageUrl 必传其一，都传则只使用 BackImageUrl） |
| BackImageUrl | 否 | string | 身份证国徽面图片的 Url 地址（与 BackImageBase64 必传其一，都传则只使用 BackImageUrl） |

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

- 同时识别正反面，并返回数据
