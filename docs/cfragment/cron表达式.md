---
order: 14
group:
  order: 1
---

# cron 表达式

## 注册引入

> 需要手动引入

```html
import CronInput from '@/components/cron-input';

<script>
  export default {
    components: {
      CronInput,
    },
  };
</script>
```

#### 实例

```html
<template>
  <create-random v-model="value"></create-random>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
      };
    },
  };
</script>
```

#### 参数说明

##### 属性

| 属性    | 说明       | 类型     | 可选值                      | 默认值 |
| ------- | ---------- | -------- | --------------------------- | ------ |
| v-model | 绑定的值   | `string` | ——                          | ——     |
| size    | 输入框大小 | `string` | `medium` / `small` / `mini` | `mini` |

##### 事件

| 属性   | 说明       | 参数                      |
| ------ | ---------- | ------------------------- |
| change | 生成后触发 | `(value: string) => void` |
| reset  | 重置后触发 | `(value: string) => void` |

## 效果演示

![cron表达式](https://oss.icuapi.com/docs/openapi/cron%E8%A1%A8%E8%BE%BE%E5%BC%8F.png)
