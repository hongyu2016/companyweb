/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { isBrowser, Helmet } from 'umi';
import Content0 from '@/components/Content/Content0';
import Content7 from '@/components/Content/Content7';
import Teams0 from '@/components/Teams/Teams0';

import { content7data } from './data';

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
    const children = [
      <Teams0
        id="Teams0_1"
        key="Teams0_1"
        // dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={content7data}
        isMobile={this.state.isMobile}
      />,
    ];

    return (
      <>
        <Helmet encodeSpecialCharacters={false}>
          <html lang="en" />
          <title>羽歌天地</title>
        </Helmet>
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
      </>

    );
  }
}
