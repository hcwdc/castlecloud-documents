---
order: 1
group:
  order: 6
---

# Token 白名单

> 将需要非登录可访问的接口添加到该名单内  
> 文件所在位置：`src/main/java/com/castle/fortress/admin/core/constants/GlobalConstants.java`

```java
/**
     * 白名单 不需要登录可访问
     * 两个星号表示通配
     */
    String[] WHITE_LIST ={
            //登录页面
            "/login"
//            //登录请求
//            ,"login"
            //静态资源
            ,"/static/**"
            //页面类都放行
            ,"/page/**"
            //刷新token
            ,"/refreshToken"
            //swagger
            ,"/webjars/**","/v2/**","/doc.html","/swagger-ui.html","/swagger-resources"
            //文件上传
            ,"/system/oss/upload"
            //ue配置文件
            ,"/system/ueditor/config"
            //验证码
            ,"/captcha/**"
            //对外接口
            ,API_PREFIX+"**"
            //动态表 字段
            ,"/system/tmpDemo/demo"
    };
```

> WHITE_LIST 请把放行的路径配置到该对象中
