---
order: 5
group:
  order: 4
---

# 增值税发票识别

**简要描述**

- 本接口支持增值税专用发票、增值税普通发票、增值税电子发票全字段的内容检测和识别，包括发票代码、发票号码、打印发票代码、打印发票号码、开票日期、合计金额、校验码、税率、合计税额、价税合计、购买方识别号、复核、销售方识别号、开票人、密码区 1、密码区 2、密码区 3、密码区 4、发票名称、购买方名称、销售方名称、服务名称、备注、规格型号、数量、单价、金额、税额、收款人等字段。

**请求 URL**

```shell
http://api.icuapi.com/openapi/ocr/invoice
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
  "IsPdf": "",
  "PdfPageNumber": ""
}
```

| 参数名 | 必选 | 类型 | 说明 |
| :-- | :-- | :-- | --- |
| ImageBase64 | 否 | string | 支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF 大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。 （与 ImageUrl 必传其一，都传则只使用 ImageUrl） |
| ImageUrl | 否 | string | 支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF 大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。（与 ImageBase64 必传其一，都传则只使用 ImageUrl） |
| IsPdf | 否 | boolean | 是否开启 PDF 识别，默认值为 false，开启后可同时支持图片和 PDF 的识别。 |
| PdfPageNumber | 否 | Integer | 需要识别的 PDF 页面的对应页码，仅支持 PDF 单页识别，当上传文件为 PDF 且 IsPdf 参数值为 true 时有效，默认值为 1。 |

**返回示例**

```json
{
  "msg": "操作成功",
  "code": 0,
  "data": {
    "VatInvoiceInfos": [
      {
        "Name": "发票名称",
        "Value": "北京增值税电子普通发票",
        "Polygon": {
          "LeftTop": {
            "X": 528,
            "Y": 49
          },
          "RightTop": {
            "X": 1191,
            "Y": 50
          },
          "RightBottom": {
            "X": 1191,
            "Y": 113
          },
          "LeftBottom": {
            "X": 528,
            "Y": 112
          }
        }
      },
      {
        "Name": "发票代码",
        "Value": "011001800411",
        "Polygon": {
          "LeftTop": {
            "X": 1352,
            "Y": 92
          },
          "RightTop": {
            "X": 1516,
            "Y": 92
          },
          "RightBottom": {
            "X": 1516,
            "Y": 116
          },
          "LeftBottom": {
            "X": 1352,
            "Y": 116
          }
        }
      },
      {
        "Name": "发票号码",
        "Value": "No54154920",
        "Polygon": {
          "LeftTop": {
            "X": 1352,
            "Y": 134
          },
          "RightTop": {
            "X": 1466,
            "Y": 134
          },
          "RightBottom": {
            "X": 1466,
            "Y": 158
          },
          "LeftBottom": {
            "X": 1352,
            "Y": 158
          }
        }
      },
      {
        "Name": "开票日期",
        "Value": "2019年12月25日",
        "Polygon": {
          "LeftTop": {
            "X": 1352,
            "Y": 175
          },
          "RightTop": {
            "X": 1517,
            "Y": 175
          },
          "RightBottom": {
            "X": 1516,
            "Y": 201
          },
          "LeftBottom": {
            "X": 1351,
            "Y": 201
          }
        }
      },
      {
        "Name": "机器编号",
        "Value": "499098828273",
        "Polygon": {
          "LeftTop": {
            "X": 196,
            "Y": 218
          },
          "RightTop": {
            "X": 363,
            "Y": 218
          },
          "RightBottom": {
            "X": 363,
            "Y": 242
          },
          "LeftBottom": {
            "X": 196,
            "Y": 242
          }
        }
      },
      {
        "Name": "校验码",
        "Value": "07913656724600617435",
        "Polygon": {
          "LeftTop": {
            "X": 1351,
            "Y": 218
          },
          "RightTop": {
            "X": 1642,
            "Y": 219
          },
          "RightBottom": {
            "X": 1642,
            "Y": 243
          },
          "LeftBottom": {
            "X": 1351,
            "Y": 242
          }
        }
      },
      {
        "Name": "购买方名称",
        "Value": "潍坊华创信息技术有限公司",
        "Polygon": {
          "LeftTop": {
            "X": 324,
            "Y": 267
          },
          "RightTop": {
            "X": 599,
            "Y": 268
          },
          "RightBottom": {
            "X": 599,
            "Y": 293
          },
          "LeftBottom": {
            "X": 324,
            "Y": 292
          }
        }
      },
      {
        "Name": "密码区1",
        "Value": "031-4--*35+2<05>43+1<56/-/83",
        "Polygon": {
          "LeftTop": {
            "X": 1085,
            "Y": 275
          },
          "RightTop": {
            "X": 1620,
            "Y": 277
          },
          "RightBottom": {
            "X": 1620,
            "Y": 304
          },
          "LeftBottom": {
            "X": 1085,
            "Y": 302
          }
        }
      },
      {
        "Name": "购买方识别号",
        "Value": "91370702MA3CFQ7C9U",
        "Polygon": {
          "LeftTop": {
            "X": 327,
            "Y": 306
          },
          "RightTop": {
            "X": 674,
            "Y": 307
          },
          "RightBottom": {
            "X": 674,
            "Y": 334
          },
          "LeftBottom": {
            "X": 327,
            "Y": 333
          }
        }
      },
      {
        "Name": "密码区2",
        "Value": "8*0<1<*/4637+53-351+0/->54+9",
        "Polygon": {
          "LeftTop": {
            "X": 1085,
            "Y": 310
          },
          "RightTop": {
            "X": 1619,
            "Y": 312
          },
          "RightBottom": {
            "X": 1619,
            "Y": 338
          },
          "LeftBottom": {
            "X": 1085,
            "Y": 336
          }
        }
      },
      {
        "Name": "密码区3",
        "Value": "2*>76052-45*3+8*1*118/2>5116",
        "Polygon": {
          "LeftTop": {
            "X": 1086,
            "Y": 345
          },
          "RightTop": {
            "X": 1620,
            "Y": 347
          },
          "RightBottom": {
            "X": 1620,
            "Y": 373
          },
          "LeftBottom": {
            "X": 1086,
            "Y": 371
          }
        }
      },
      {
        "Name": "密码区4",
        "Value": "8227-+-<>>01>>0-196*5296-<+3",
        "Polygon": {
          "LeftTop": {
            "X": 1084,
            "Y": 380
          },
          "RightTop": {
            "X": 1621,
            "Y": 382
          },
          "RightBottom": {
            "X": 1621,
            "Y": 408
          },
          "LeftBottom": {
            "X": 1084,
            "Y": 406
          }
        }
      },
      {
        "Name": "货物或应税劳务、服务名称",
        "Value": "*日用杂品*日用品",
        "Polygon": {
          "LeftTop": {
            "X": 93,
            "Y": 469
          },
          "RightTop": {
            "X": 269,
            "Y": 470
          },
          "RightBottom": {
            "X": 269,
            "Y": 497
          },
          "LeftBottom": {
            "X": 93,
            "Y": 496
          }
        }
      },
      {
        "Name": "金额",
        "Value": "15.31",
        "Polygon": {
          "LeftTop": {
            "X": 1265,
            "Y": 471
          },
          "RightTop": {
            "X": 1325,
            "Y": 471
          },
          "RightBottom": {
            "X": 1325,
            "Y": 494
          },
          "LeftBottom": {
            "X": 1265,
            "Y": 494
          }
        }
      },
      {
        "Name": "税率",
        "Value": "13%",
        "Polygon": {
          "LeftTop": {
            "X": 1376,
            "Y": 471
          },
          "RightTop": {
            "X": 1426,
            "Y": 471
          },
          "RightBottom": {
            "X": 1426,
            "Y": 494
          },
          "LeftBottom": {
            "X": 1376,
            "Y": 494
          }
        }
      },
      {
        "Name": "税额",
        "Value": "1.99",
        "Polygon": {
          "LeftTop": {
            "X": 1584,
            "Y": 469
          },
          "RightTop": {
            "X": 1634,
            "Y": 470
          },
          "RightBottom": {
            "X": 1634,
            "Y": 494
          },
          "LeftBottom": {
            "X": 1584,
            "Y": 493
          }
        }
      },
      {
        "Name": "合计金额",
        "Value": "¥15.31",
        "Polygon": {
          "LeftTop": {
            "X": 1243,
            "Y": 732
          },
          "RightTop": {
            "X": 1329,
            "Y": 732
          },
          "RightBottom": {
            "X": 1329,
            "Y": 755
          },
          "LeftBottom": {
            "X": 1243,
            "Y": 755
          }
        }
      },
      {
        "Name": "合计税额",
        "Value": "1.99",
        "Polygon": {
          "LeftTop": {
            "X": 1563,
            "Y": 730
          },
          "RightTop": {
            "X": 1638,
            "Y": 731
          },
          "RightBottom": {
            "X": 1638,
            "Y": 756
          },
          "LeftBottom": {
            "X": 1563,
            "Y": 755
          }
        }
      },
      {
        "Name": "价税合计(大写)",
        "Value": "壹拾柒元叁角整",
        "Polygon": {
          "LeftTop": {
            "X": 528,
            "Y": 795
          },
          "RightTop": {
            "X": 694,
            "Y": 795
          },
          "RightBottom": {
            "X": 694,
            "Y": 821
          },
          "LeftBottom": {
            "X": 528,
            "Y": 821
          }
        }
      },
      {
        "Name": "小写金额",
        "Value": "¥17.30",
        "Polygon": {
          "LeftTop": {
            "X": 1547,
            "Y": 795
          },
          "RightTop": {
            "X": 1633,
            "Y": 796
          },
          "RightBottom": {
            "X": 1633,
            "Y": 819
          },
          "LeftBottom": {
            "X": 1547,
            "Y": 818
          }
        }
      },
      {
        "Name": "销售方名称",
        "Value": "北京物美便利超市有限公司",
        "Polygon": {
          "LeftTop": {
            "X": 325,
            "Y": 844
          },
          "RightTop": {
            "X": 600,
            "Y": 845
          },
          "RightBottom": {
            "X": 600,
            "Y": 870
          },
          "LeftBottom": {
            "X": 325,
            "Y": 869
          }
        }
      },
      {
        "Name": "销售方识别号",
        "Value": "91110107700296893E",
        "Polygon": {
          "LeftTop": {
            "X": 328,
            "Y": 880
          },
          "RightTop": {
            "X": 673,
            "Y": 881
          },
          "RightBottom": {
            "X": 673,
            "Y": 906
          },
          "LeftBottom": {
            "X": 328,
            "Y": 905
          }
        }
      },
      {
        "Name": "销售方地址、电话",
        "Value": "北京市石景山区八大处高科技园区实兴东街1号6008室4001016016",
        "Polygon": {
          "LeftTop": {
            "X": 328,
            "Y": 921
          },
          "RightTop": {
            "X": 960,
            "Y": 923
          },
          "RightBottom": {
            "X": 960,
            "Y": 948
          },
          "LeftBottom": {
            "X": 328,
            "Y": 946
          }
        }
      },
      {
        "Name": "销售方开户行及账号",
        "Value": "工行北京玉东支行0200207829200086396",
        "Polygon": {
          "LeftTop": {
            "X": 326,
            "Y": 962
          },
          "RightTop": {
            "X": 710,
            "Y": 963
          },
          "RightBottom": {
            "X": 710,
            "Y": 988
          },
          "LeftBottom": {
            "X": 326,
            "Y": 987
          }
        }
      },
      {
        "Name": "开票人",
        "Value": "物美",
        "Polygon": {
          "LeftTop": {
            "X": 1016,
            "Y": 1008
          },
          "RightTop": {
            "X": 1074,
            "Y": 1008
          },
          "RightBottom": {
            "X": 1074,
            "Y": 1035
          },
          "LeftBottom": {
            "X": 1016,
            "Y": 1035
          }
        }
      },
      {
        "Name": "是否有公司印章",
        "Value": "1"
      },
      {
        "Name": "省",
        "Value": "北京市"
      },
      {
        "Name": "发票消费类型",
        "Value": "服务"
      },
      {
        "Name": "发票类型",
        "Value": "增值税电子普通发票"
      },
      {
        "Name": "打印发票代码",
        "Value": ""
      },
      {
        "Name": "市",
        "Value": ""
      },
      {
        "Name": "成品油标志",
        "Value": ""
      },
      {
        "Name": "是否代开",
        "Value": ""
      },
      {
        "Name": "联次",
        "Value": ""
      },
      {
        "Name": "购买方地址、电话",
        "Value": ""
      },
      {
        "Name": "购买方开户行及账号",
        "Value": ""
      },
      {
        "Name": "通行日期止",
        "Value": ""
      },
      {
        "Name": "打印发票号码",
        "Value": ""
      },
      {
        "Name": "单价",
        "Value": ""
      },
      {
        "Name": "备注",
        "Value": ""
      },
      {
        "Name": "收款人",
        "Value": ""
      },
      {
        "Name": "复核",
        "Value": ""
      },
      {
        "Name": "单位",
        "Value": ""
      },
      {
        "Name": "数量",
        "Value": ""
      },
      {
        "Name": "规格型号",
        "Value": ""
      },
      {
        "Name": "服务类型",
        "Value": ""
      },
      {
        "Name": "通行日期起",
        "Value": ""
      },
      {
        "Name": "类型",
        "Value": ""
      },
      {
        "Name": "车牌号",
        "Value": ""
      },
      {
        "Name": "车船税",
        "Value": ""
      },
      {
        "Name": "通行费标志",
        "Value": ""
      }
    ],
    "Items": [
      {
        "LineNo": "1",
        "Name": "*日用杂品*日用品",
        "Spec": "",
        "Unit": "",
        "Quantity": "",
        "UnitPrice": "",
        "AmountWithoutTax": "15.31",
        "TaxRate": "13%",
        "TaxAmount": "1.99"
      }
    ],
    "PdfPageSize": 0,
    "Angle": 0.15805916
  }
}
```

**返回参数说明**

| 参数名 | 类型 | 说明 |
| :-- | :-- | --- |
| VatInvoiceInfos | Array of TextVatInvoice | 检测到的文本信息 TextVatInvoice 见下方说明 |
| Items | Array of VatInvoiceItem | 明细条目 VatInvoiceItem 见下方说明 |
| PdfPageSize | Integer | 图片旋转角度（角度制），文本的水平方向为 0°；顺时针为正，逆时针为负。 |
| Angle | Float | 出生日期（人像面） |

**TextVatInvoice 说明**

| 参数名 | 类型 | 说明 |
| :-- | :-- | --- |
| Name | String | 识别出的字段名称（关键字）。支持以下字段的识别：发票代码、 发票号码、 打印发票代码、 打印发票号码、 开票日期、 购买方识别号、 小写金额、 价税合计(大写)、 销售方识别号、 校验码、 购买方名称、 销售方名称、 税额、 复核、 联次名称、 备注、 联次、 密码区、 开票人、 收款人、 （货物或应税劳务、服务名称）、省、 市、 服务类型、 通行费标志、 是否代开、 是否收购、 合计金额、 是否有公司印章、 发票消费类型、 车船税、 机器编号、 成品油标志、 税率、 合计税额、 （购买方地址、电话）、 （销售方地址、电话）、 单价、 金额、 销售方开户行及账号、 购买方开户行及账号、 规格型号、 发票名称、 单位、 数量、 校验码备选、 校验码后六位备选、发票号码备选、车牌号、类型、通行日期起、通行日期止、发票类型。 |
| Value | String | 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。 |
| Polygon | Polygon | 字段在原图中的中的四点坐标，LeftTop，RightTop，RightBottom，LeftBottom 分别表示左上、右上、右下、左下定点坐标。详细格式参考返回示例 |

**VatInvoiceItem 说明**

| 参数名           | 类型   | 说明       |
| :--------------- | :----- | ---------- |
| LineNo           | String | 行号       |
| Name             | String | 名称       |
| Spec             | String | 规格       |
| Unit             | String | 单位       |
| Quantity         | String | 数量       |
| UnitPrice        | String | 单价       |
| AmountWithoutTax | String | 不含税金额 |
| TaxRate          | String | 税率       |
| TaxAmount        | String | 税额       |
