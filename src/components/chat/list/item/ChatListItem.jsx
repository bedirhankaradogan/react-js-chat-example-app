import React, {Component} from 'react';
import classNames from 'classnames';
import {setActiveUserId} from '../../../../redux/actions/index.js';
import store from '../../../../redux/store/index.js';

// Styles
import './chat-list-item.scss';
// Styles

export default class ChatListItem extends Component {

  selectChatItem(userId) {
    store.dispatch(setActiveUserId(userId));
  }

  render() {
    const state = store.getState();
    const {
      userId,
      name,
      profilePicture,
      isOnline,
    } = this.props;
    const itemClassName = classNames(
      'chat-list-item',
      'box-sizing',
      {
        'chat-list-item-active': state.activeUserId === userId
      }
    );
    const statusClassName = classNames(
      'chat-list-item-status',
      {
        'chat-list-item-status-online': isOnline,
        'chat-list-item-status-offline': !isOnline
      }
    );

    return(
      <div className={itemClassName} onClick={this.selectChatItem.bind(this, userId)}>
        <div className={'chat-list-item-avatar-and-status-wrapper'}>
          <div className={'chat-list-item-avatar box-sizing'} style={{backgroundImage: 'url(' + profilePicture + ')'}}></div>
          <div className={statusClassName}></div>
        </div>
        <div className={'chat-list-item-name-wrapper box-sizing'}>
          <div className={'chat-list-item-name'}>{name}</div>
        </div>
      </div>
    );
  }

}