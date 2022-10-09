---
order: 3
group:
  order: 2
---

# swagger 文档

<Alert type="warning">
这里使用了：<a href="https://doc.xiaominfo.com/" target="_blank">knife4j 2.0.9</a>
</Alert>

## 访问地址：

> http://ip:端口/doc.html#/home

> 生成代码的时候可以控制是否生成文档

添加如下注解即可实现 swagger 中查看

```java
@ApiOperation("系统字典表分页展示")
```

## 开启&关闭

resources 目录下：`application.yml`文件内可以进行控制

```yaml
#是否启动swagger
swagger:
  enable: true
```

> 个性化数据在 `application-dev.yml` 和 `application-prod.yml` 文件中进行配置
