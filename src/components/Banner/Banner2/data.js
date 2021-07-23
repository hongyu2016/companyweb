/*
 * @author: liuhy
 * @Date: 2021-07-22 11:33:42
 * @LastEditTime: 2021-07-22 13:16:12
 */

export default {
  wrapper: {
    className: 'banner2',
  },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: {
          className: 'banner-user-elem',
        },
        page: {
          className: 'home-page banner2-page',
        },
        textWrapper: {
          className: 'banner2-text-wrapper',
        },
        bg: {
          className: 'bg bg0',
        },
        title: {
          className: 'banner2-title',
          children: 'Ant Motion',
        },
        content: {
          className: 'banner2-content',
          children: '一个高效的页面动画解决方案',
        },
        button: {
          className: 'banner2-button',
          children: 'Learn More',
        },
      },
    ],
  },
};
