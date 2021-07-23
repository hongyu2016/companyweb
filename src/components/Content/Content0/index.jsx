import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../../utils';
import data from './data';
import './index.less';

class Content extends React.PureComponent {
  render() {
    const { isMobile, ...props } = this.props;
    let { dataSource = data } = this.props;
    const { wrapper, titleWrapper, page, childWrapper } = dataSource;

    return (
      <div
        {...props}
        className="home-page-wrapper content0-wrapper"
      >
        <div
          className="home-page content0"
        >
          <div
            className="title-wrapper"
            /* replace-start */
            data-edit="titleWrapper"
          /* replace-end */
          >
            {
              titleWrapper.map(getChildrenToRender)
            }
          </div>
          <OverPack
            playScale={0.3}
            className=''
          >
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              /* replace-start */
              data-edit="Row"
            /* replace-end */
            >
              {childWrapper.map((block, i) => {

                return (
                  <Col
                    key={i.toString()}
                    className="content0-block"
                    /* replace-start */
                    data-edit="Col"
                    md={8}
                    xs={24}
                  /* replace-end */
                  >

                    <div
                      className="content0-block-item"
                      /* replace-start */
                      data-edit="childWrapper"
                    /* replace-end */
                    >
                      {block.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
