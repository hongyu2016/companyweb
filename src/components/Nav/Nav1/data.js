/*
 * @author: liuhy
 * @Date: 2021-07-22 11:35:34
 * @LastEditTime: 2021-07-22 13:36:20
 */

export default {
  wrapper: {
    className: 'header1 home-page-wrapper',
  },
  page: {
    className: 'home-page',
  },
  logo: {
    className: 'header1-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header1-menu',
    children: [
      {
        name: 'item0',
        a: {
          children: '导航一',
          href: '',
        },
      },
      {
        name: 'item1',
        a: {
          children: '导航二',
          href: '',
        },
      },
      {
        name: 'item2',
        a: {
          children: '导航三',
          href: '',
        },
      },
      {
        name: 'item3',
        a: {
          children: '导航四',
          href: '',
        },
      },
    ],
  },
  mobileMenu: {
    className: 'header1-mobile-menu',
  },
  help: {
    className: 'help',
    children: '帮助',
  },
  user: {
  },
};
