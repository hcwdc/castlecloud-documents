// 配置文件
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Castle开放平台',
  favicon: 'https://oss.icuapi.com/docs/openapi/doc-logo.png',
  logo: 'https://oss.icuapi.com/docs/openapi/doc-logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  // more config: https://d.umijs.org/config
  locales: [['zh-CN', '中文']],
  // 多语言配置方式如下
  navs: [
    //   null,
    {
      title: '体验地址',
      children: [
        {
          title: 'h5demo',
          path: 'http://h5demo.icuapi.com/',
        },
        {
          title: 'cms网页端',
          path: 'http://demo.icuapi.com/',
        },
        {
          title: '运营管理后台',
          path: 'http://demo.icuapi.com/admin',
        },
      ],
    },
    {
      title: '框架',
      path: '/cframe',
    },
    {
      title: '业务',
      children: [
        {
          title: 'cms',
          path: '/cms',
        },
      ],
    },
    {
      title: '组件',
      path: '/cfragment',
    },
    {
      title: 'API市场',
      path: '/capi',
    },
    {
      title: '项目地址',
      children: [
        {
          title: 'GitHub',
          path: 'https://gitee.com/hcwdc/castle-fortress',
        },
        {
          title: 'Gitee',
          path: 'https://gitee.com/hcwdc/castle-fortress',
        },
      ],
    },
  ],
});
