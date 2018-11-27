import React from 'react';
import classnames from 'classnames';
import Button from '@components/button'
import './index.less';

export default class Keybord extends React.Component {
  render() {

    return (
      <div className="keybord-wrap">
        <div className="left">
          <div className="operate-wrap">
            <Button color="green" size="small"  label="暂停(P)"/>
            <Button color="green" size="small" label="音效(S)"/>
            <Button color="red" size="small" label="重玩(R)"/>
          </div>
          <div className="fall-down-btn">
            <Button color="blue" size="large" label="掉落(SPACE)"/>
          </div>
        </div>
        <div className="right">
          <div class="right-item">
            <Button color="blue" size="medium" fontPosition="right" label="旋转"/>
          </div>
          <div class="move-row-wrap">
            <Button color="blue" size="medium" label="左移"/>
            <div className="gudie-arrow" >
            <span class="arrow up"></span>
            <span class="arrow right"></span>
            <span class="arrow bottom"></span>
            <span class="arrow left"></span>
            </div>
            <Button color="blue" size="medium" label="右移"/>
          </div>
          <div class="right-item key-down">
            <Button color="blue" size="medium" label="下移"/>
          </div>
        </div>
      </div>
    );
  }
}
