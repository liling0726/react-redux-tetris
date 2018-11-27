import React from 'react';
import classnames from 'classnames';

import './index.less';

export default class Button extends React.Component {
  render() {
    const { color='',size='',fontPosition='', label} = this.props
    return (
      <div className="button-wrap">
        <i className={classnames('button',color,size)}></i>
        <div className={classnames('button-name',fontPosition)}>{label}</div>
      </div>
    );
  }
}
