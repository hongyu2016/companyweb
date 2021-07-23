
export default {
  wrapper: {
    className: 'header0 home-page-wrapper',
  },
  page: {
    className: 'home-page',
  },
  logo: {
    className: 'header0-logo',
    children: require('@/static/logo2.png'),
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: './',
          children: [
            {
              children: '首页',
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: './yuge.html',
          children: [
            {
              children: '羽歌天地',
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: '模板示例',
              name: 'text',
            },
          ],
        },
      },
      // {
      //   name: 'item0',
      //   className: 'header0-item',
      //   children: {
      //     href: '/#',
      //     children: [
      //       {
      //         children: '导航一',
      //         name: 'text',
      //       },
      //     ],
      //   },
      //   subItem: [
      //     {
      //       name: 'sub0',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //     {
      //       name: 'sub1',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // },
      
      
    ],
  },
  mobileMenu: {
    className: 'header0-mobile-menu',
  },
};
