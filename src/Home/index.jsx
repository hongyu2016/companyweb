/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { isBrowser } from 'umi';
import Banner0 from '@/components/Banner/Banner0';
import Content0 from '@/components/Content/Content0';
import Content13 from '@/components/Content/Content13';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

let location = isBrowser() ? window.location : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }


  render() {
    const bannerData = {
      title: '',
      img: require('@/static/logo.png'),
      content: '高效简洁的官网解决方案',
      button: '',
    }
    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        isMobile={this.state.isMobile}
        dataSource={bannerData}
      />,

      <Content0
        id="Content0_0"
        key="Content0_0"
        isMobile={this.state.isMobile}
      />,

      <Content13
        id="Content13_0"
        key="Content13_0"
        isMobile={this.state.isMobile}
      />,

    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
