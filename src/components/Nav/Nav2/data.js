/*
 * @author: liuhy
 * @Date: 2021-07-22 11:35:34
 * @LastEditTime: 2021-07-22 13:37:01
 */

export default {
  isScrollLink: true,
  wrapper: {
    className: 'header2 home-page-wrapper',
  },
  page: {
    className: 'home-page',
  },
  logo: {
    className: 'header2-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '导航名称',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: {
    className: 'header2-mobile-menu',
  },
};
