import React from 'react';
import classnames from 'classnames';

// import { i18n, lan } from '../../unit/const';
import './index.less';

export default class Block extends React.Component {
  render() {
    const { blocks = [], styles = {} } = this.props.items
    return (
      <div className="block " style={styles}>
        {
          blocks.map((item, index) => {
            
            return <b className={classnames('block-item',{clear:item.block,right:item.isRight})}></b >
          })
        }
      </div >
    );
  }
}
