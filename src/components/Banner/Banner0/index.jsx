import React from 'react';
import { Button } from 'antd';
import {
  DownOutlined,
} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from '../../utils';
import data from './data';
import './index.less';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    let { dataSource } = currentProps;

    dataSource = Object.assign(data, dataSource)

    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div
        {...currentProps}
        className="banner0"
      >
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          className="banner0-text-wrapper"
        >
          <div
            key="title"
            className="banner0-title"
            /* replace-start */
            data-edit="text,image"
          /* replace-end */
          >
            {
              // typeof dataSource.title === 'string' && dataSource.title.match(isImg) ? (
              //   <img src={dataSource.title} width="100%" alt="img" />
              // ) : React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.title } })
              
              dataSource.title ? (React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.title } })) : null
            }
            {
              dataSource.img ? (<img src={dataSource.img} width="100%" alt="img" />) : null
            }
          </div>
          <div
            key="content"
            className="banner0-content"
          >
            {/* replace-start-value = dataSource.content */
              React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.content } })
           /* replace-end-value */}
          </div>
          {
            dataSource.button ?
              <Button
                ghost
                key="button"
                className="banner0-button"
                /* replace-start */
                data-edit="link,text"
              /* replace-end */
              >
                {/* replace-start-value = dataSource.button */
                  React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.button } })
           /* replace-end-value */}
              </Button> :
              null
          }


        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20', yoyo: true, repeat: -1, duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
