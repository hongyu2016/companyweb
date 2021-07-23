/*
 * @author: liuhy
 * @Date: 2021-07-22 11:34:16
 * @LastEditTime: 2021-07-22 13:24:58
 */

export default {
  wrapper: {
    className: 'home-page-wrapper content4-wrapper',
  },
  page: {
    className: 'home-page content4',
  },
  OverPack: {
    playScale: 0.3,
    className: '',
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '科技想象力，金融创造力',
      },
    ],
  },
  video: {
    className: 'content4-video',

    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};
