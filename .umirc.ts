/*
 * @author: liuhy
 * @Date: 2021-07-21 11:13:42
 * @LastEditTime: 2021-07-23 16:15:03
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/yuge', component: '@/pages/yuge' },
      ],
    },

  ],
  fastRefresh: {},
  ssr: {
    // mode: 'stream'
  },
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  targets: {
    ie: 11,
  },
  antd: {},
  favicon: './favicon.ico',
  base: '/yuhome',
  publicPath: './'
});
