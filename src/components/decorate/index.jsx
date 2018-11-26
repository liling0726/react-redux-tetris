import React from 'react';
import classnames from 'classnames';
import Block from '@components/block'
// import { i18n, lan } from '../../unit/const';
import './index.less';

export default class Decorate extends React.Component {
  setTitleDecorate = (specialId) => {
    return [1, 2, 3, 4, 5].map((item, index) => {
      return <span class={classnames('title-block', { special: specialId === index })} ></span>
    })
  }
  render() {
    return (
      <div className="decorate">
        <div className="view">
          <Block items={{ blocks: [{ isRight: true }, {}, {}, { block: true }], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{ block: true }, {}, {}, {}], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{}, {}, {}, {}], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{}, {}, { isRight: true }, { isRight: true }], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{ block: true }, { block: true }, { block: true }, { block: true }], styles: { marginBottom: '15px' } }} />
        </div>
        <div className="content">
          <div className="decorate-title">
            {
              this.setTitleDecorate(0)
            }
            {
              this.setTitleDecorate(4)
            }
          </div>
        </div>
        <div className="view">
          <Block items={{ blocks: [{ block: true }, {}, {}, { isRight: true }], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{ isRight: true }, {}, {}, { isRight: true }], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{}, {}, {}, {}], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{}, {}, { block: true }, { block: true }], styles: { marginBottom: '15px' } }} />
          <Block items={{ blocks: [{ isRight: true }, { isRight: true }, { isRight: true }, { isRight: true }], styles: { marginBottom: '15px' } }} />
        </div>
      </div>
    );
  }
}
