---
order: 1
group:
  order: 7
---

# ip 转位置服务

**简要描述**

- 通过终端设备 IP 地址获取其当前所在地理位置，精确到市级，常用于显示当地城市天气预报、初始化用户城市等非精确定位场景。

**请求 URL**

- `http://api.icuapi.com/openapi/lbs/ipToAddress`

**请求方式**

- Get

**返回类型**

- JSON

**Query 参数**

| 参数名 | 必选 | 类型   | 说明                             |
| :----- | :--- | :----- | -------------------------------- |
| ip     | 否   | string | IP 地址，缺省时会使用请求端的 IP |

**Body 参数**

暂无

**返回示例**

```json
{
  "code": 0,
  "success": true,
  "data": {
    "ip": "222.132.43.68",
    "ad_info": {
      "nation": "中国",
      "city": "潍坊市",
      "adcode": 370700,
      "province": "山东省",
      "district": ""
    },
    "location": {
      "lng": 119.16176,
      "lat": 36.70686
    }
  },
  "msg": "操作成功"
}
```

**返回参数说明**

| 参数名 | 类型 | 说明 |
| :-- | :-- | --- |
| ip | String | 用于定位的 IP 地址 |
| location | object | 定位坐标。注：IP 定位服务精确到市级，该位置为 IP 地址所属的行政区划政府坐标。 |
| ad_info | object | 认证结果 |

**location 对象说明**

| 参数名 | 类型   | 说明 |
| :----- | :----- | ---- |
| lat    | number | 纬度 |
| lng    | number | 经度 |

**ad_info 对象说明**

| 参数名   | 类型   | 说明         |
| :------- | :----- | ------------ |
| nation   | String | 国家         |
| province | String | 省           |
| city     | String | 市           |
| district | String | 区           |
| adcode   | number | 行政区划代码 |
