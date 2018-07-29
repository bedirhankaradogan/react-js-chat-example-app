import React, { Component } from 'react';
import classNames from 'classnames';
import store from '../../../../redux/store';
import {setActiveUserId} from '../../../../redux/actions';

// Styles
import './chat-list-item.scss';
// Styles

export default class ChatListItem extends Component {

  selectChatItem(userId) {
    store.dispatch(setActiveUserId(userId));
  }

  render() {
    const {
      userId,
      name,
      profilePicture,
      isOnline,
      messages
    } = this.props;
    /*
    const lastMessage = messages[messages.length - 1];
    const unreadMessageCount = messages.filter((message) => message.isRead === false).length;
    */
    const lastMessage = {
      date: '2018-07-01',
      time: '23:00',
      text: 'You know, I built Redux!',
      isSenderMe: false,
      isRead: false
    };
    const unreadMessageCount = 0;
    const statusClassName = classNames(
      'chat-list-item-status',
      {
        'chat-list-item-status-online': isOnline,
        'chat-list-item-status-offline': !isOnline
      }
    );
    const usernameClassName = classNames(
      'chat-list-item-username',
      'box-sizing',
      {
        'chat-list-item-username-bold': unreadMessageCount > 0
      }
    );

    return(
      <div className={'chat-list-item box-sizing'} onClick={this.selectChatItem.bind(this, userId)}>
        
        <div className={'chat-list-item-avatar-wrapper'}>
          <div className={'chat-list-item-avatar box-sizing'} style={{backgroundImage: 'url(' + profilePicture + ')'}}></div>
          <div className={statusClassName}></div>
        </div>

        <div className={'chat-list-item-meta-data-wrapper box-sizing'}>
          <div className={'chat-list-item-meta-data-row'}>
            <div className={usernameClassName}>{name}</div>
            <div className={'chat-list-item-last-chat-time'}>{lastMessage.time}</div>
          </div>
          <div className={'chat-list-item-meta-data-row'}>
            <div className={'chat-list-item-last-message box-sizing'}>{lastMessage.text}</div>
            {unreadMessageCount > 0 &&
            <div className={'chat-list-item-last-unread-message-count'}>
              <div className={'chat-list-item-last-unread-message-count-text'}>
                {unreadMessageCount > 10 ? '9+' : unreadMessageCount}
              </div>
              <div className={'chat-list-item-last-unread-message-count-background'}></div>
            </div>}
          </div>
        </div>

      </div>
    );
  }
}