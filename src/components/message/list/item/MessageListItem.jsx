import React, {Component} from 'react';
import classNames from 'classnames';

// Styles
import './message-list-item.scss';
// Styles

export default class MessageListItem extends Component {
  render() {
    const {
      text,
      isSenderMe
    } = this.props;
    const bubbleClassName = classNames(
      'message-list-item-bubble',
      'box-sizing',
      {
        'message-list-item-bubble-right': isSenderMe
      }
    );
    const arrowClassName = classNames(
      'message-list-item-bubble-arrow',
      {
        'message-list-item-bubble-arrow-right': isSenderMe,
        'message-list-item-bubble-arrow-left': !isSenderMe,
      }
    );
    
    return(
      <div className={'message-list-item box-sizing'}>
        <div className={bubbleClassName}>
          <div className={arrowClassName}></div>
          <div className={'message-list-item-bubble-row'}>{text}</div>
        </div>
      </div>
    );
  }
}