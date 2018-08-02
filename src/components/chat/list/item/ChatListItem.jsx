import React, {Component} from 'react';
import classNames from 'classnames';
import {setActiveUserId} from '../../../../redux/actions';
import store from '../../../../redux/store';

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
    } = this.props;
    const statusClassName = classNames(
      'chat-list-item-status',
      {
        'chat-list-item-status-online': isOnline,
        'chat-list-item-status-offline': !isOnline
      }
    );

    return(
      <div className={'chat-list-item box-sizing'} onClick={this.selectChatItem.bind(this, userId)}>
        <div className={'chat-list-item-avatar-wrapper'}>
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