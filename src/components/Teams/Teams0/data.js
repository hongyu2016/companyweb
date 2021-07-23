/*
 * @author: liuhy
 * @Date: 2021-07-22 13:15:21
 * @LastEditTime: 2021-07-23 09:42:04
 */

export default {
  wrapper: {
    className: 'home-page-wrapper teams0-wrapper',
  },
  OverPack: {
    playScale: 0.3,
    className: 'home-page teams0',
  },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children: 'https://blog.iyuge.cn/uploads/avatar.png',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children: '本人从事web前端开发工作有6年时间，目前在软件公司任职，熟悉各种类型的网站开发，以及微信小程序、支付宝小程序、钉钉小程序等开发。欢迎有需要官网定制开发的联系我。',
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: '羽歌',
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: 'web前端开发工程师',
              className: 'teams0-content',
            },
          ],
        },
      },

    ],
  },
};
