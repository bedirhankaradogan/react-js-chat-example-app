import React, { Component } from 'react';
import classNames from 'classnames';

// Styles
import './message-list-item.scss';
// Styles

export default class MessageListItem extends Component {
  render() {
    const {
      date,
      time,
      text,
      isSenderMe,
      isRead,
      isEdited
    } = this.props.data;
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
          <div className={'message-list-item-bubble-row'}>
            <div className={'message-list-item-bubble-row-text'}>{text}</div>
          </div>
          <div className={'message-list-item-bubble-row'}>
            <div className={'message-list-item-bubble-row-time'}>{time}</div>
          </div>
        </div>
      </div>
    );
  }
}