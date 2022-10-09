---
order: 2
group:
  order: 6
---

# XSS 过滤白名单

<Alert type="error">
  数据库表字段的名字中不能含有 <strong> script</strong> 等脚本关键字 否则会被过滤掉
</Alert>

## 过滤名单

> 过滤范围：请求 Body 参数、Query 参数  
> 文件位置：`src/main/java/com/castle/fortress/admin/core/constants/GlobalConstants.java`  
> XSS_WHITE_LIST 请把放行的路径配置到该对象中

```java
    /**
     * XSS过滤白名单 不需要替换标签
     * 两个星号表示通配
     */
    String[] XSS_WHITE_LIST ={
            //代码示例编辑 富文本
            "/demo/tmpDemoGenerate/edit"
    };
```

## 过滤规则

> 文件位置：`src/main/java/com/castle/fortress/admin/core/wrapper/BodyReaderRequestWrapper.java`  
> 现版本的过滤规则如下，请根据实际使用情况自行调整。

```java
private static String cleanXSS(String value) {
                        value = value.replaceAll("eval\\((.*)\\)", "");
                        value = value.replaceAll("alert\\(.*\\)", "");
                        value = value.replaceAll("(javascript|script)", "\"\"");
                        value = value.replaceAll("(o|O)(n|N)(e|E)(r|R)(r|R)(o|O)(r|R).*?=.*?(\\\")[^\\\"]*(\\\")", "");
                        value = value.replaceAll("(onafterprint|onbeforeprint|onbeforeonload" +
                                                        "|onblur|onfocus|onhashchange|onload|onmessage" +
                                                        "|onoffline|ononline|onpagehide|onpageshow" +
                                                        "|onpopstate|onredo|onresize|onstorage" +
                                                        "|onundo|onunload|onblur|onchange" +
                                                        "|oncontextmenu|onfocus|onformchange|onforminput" +
                                                        "|oninput|oninvalid|onreset|onselect|onsubmit" +
                                                        "|onkeydown|onkeypress|onkeyup|onclick|ondblclick|ondrag" +
                                                        "|ondragend|ondragenter|ondragleave|ondragover" +
                                                        "|ondragstart|ondrop|onmousedown|onmousemove" +
                                                        "|onmouseout|onmouseover|onmouseup|onmousewheel" +
                                                        "|onscroll|onabort|oncanplay|oncanplaythrough" +
                                                        "|ondurationchange|onemptied" +
                                                        "|onended|onloadeddata|onloadedmetadataNew|onloadstartNew" +
                                                        "|onpauseNew|onplayNew|onplayingNew|onprogressNew|onratechangeNew|onreadystatechangeNew" +
                                                        "|onseekedNew|onseekingNew|onstalledNew" +
                                                        "|onsuspendNew|ontimeupdateNew|onvolumechangeNew|onwaitingNew" +
                                                        "|onshow|ontoggle).*?=.*?(\\\")[^\\\"]*(\\\")", "");//(?<=\").*?(?!\")
                        value = value.replaceAll("(onafterprint|onbeforeprint|onbeforeonload" +
                                                        "|onblur|onfocus|onhashchange|onload|onmessage" +
                                                        "|onoffline|ononline|onpagehide|onpageshow" +
                                                        "|onpopstate|onredo|onresize|onstorage" +
                                                        "|onundo|onunload|onblur|onchange" +
                                                        "|oncontextmenu|onfocus|onformchange|onforminput" +
                                                        "|oninput|oninvalid|onreset|onselect|onsubmit" +
                                                        "|onkeydown|onkeypress|onkeyup|onclick|ondblclick|ondrag" +
                                                        "|ondragend|ondragenter|ondragleave|ondragover" +
                                                        "|ondragstart|ondrop|onmousedown|onmousemove" +
                                                        "|onmouseout|onmouseover|onmouseup|onmousewheel" +
                                                        "|onscroll|onabort|oncanplay|oncanplaythrough" +
                                                        "|ondurationchange|onemptied" +
                                                        "|onended|onloadeddata|onloadedmetadataNew|onloadstartNew" +
                                                        "|onpauseNew|onplayNew|onplayingNew|onprogressNew|onratechangeNew|onreadystatechangeNew" +
                                                        "|onseekedNew|onseekingNew|onstalledNew" +
                                                        "|onsuspendNew|ontimeupdateNew|onvolumechangeNew|onwaitingNew" +
                                                        "|onshow|ontoggle).*?=.*?(\\\')[^\\\']*(\\\')", "");//(?<=\").*?(?!\")
                        return value;
                }
```
