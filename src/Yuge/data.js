/*
 * @author: liuhy
 * @Date: 2021-07-23 09:49:43
 * @LastEditTime: 2021-07-23 10:44:49
 */
export const content7data = {
  wrapper: {
    className: 'home-page-wrapper content7-wrapper',
  },
  page: {
    className: 'home-page content7',
  },
  OverPack: {
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '欢迎来到爱羽歌',
        className: 'title-h1',
      },
      {
        name: 'content',
        children: '这里收录了本人的一些项目',
      },
    ],
  },
  tabsWrapper: {
    className: 'content7-tabs-wrapper',
  },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: '移动端',
            className: 'content7-tag-name',
          },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: `<span>
              <h3>账目随身记</h3>
              <p>一款微信记账小程序，后端基于nodejs的koa2+mysql开发，拥有账目列表，图表统计、图表导出、分类管理、账目添加（支出收入）等几项重要功能；微信小程序搜索<span class="tag">“账目随身记”</span> 即可访问。</p>
              <br/>
              <h3><a href="http://cou.iyuge.cn/">淘宝京东优惠券</a></h3>
              <p>目前支持淘宝和部分京东的优惠券的商品，支持淘宝天猫全类目商品。支持生成淘口令领取、直接浏览器打开淘宝页面链接领取、还支持生成含有二维码的图片进行朋友圈等的传播。前端采用nuxtjs服务端渲染；后端接口使用koa2</p>
              <br/>
              <h3><a href="http://blog.iyuge.cn/">个人博客</a></h3>
              <p>该博客基于hexo+github page+阿里云绑定二级域名，所谓好记性不如烂笔头，本博客可以记录平时遇到的技术，形成技术沉淀。</p>
              <br/>
            </span>`,
          },
          img: {
            className: 'content7-img',
            children: 'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'ungroup' },
          text: { className: 'content7-tag-name', children: '其他' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: `<span>
            <h3><a href="http://syc.iyuge.cn/">水研村官网</a></h3>
            <p>vue.js+thinkjs（后端）+ mysql。pc、移动端自适应</p>
            <br/>
            <h3><a href="http://www.iyuge.cn/qianyuan/">牵缘摄影工作室</a></h3>
            <p>这是一个婚纱摄影网站。只支持pc端</p>
            <br/>
            <h3><a href="http://www.iyuge.cn/hometown/">百色民族风情网</a></h3>
            <p>介绍广西壮族自治区百色市的民族风情（静态页）</p>
            </span>`,
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: 'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },

      },

    ],
  },
}