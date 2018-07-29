import React, { Component } from 'react';
import _ from 'lodash';

// Styles
import './chat-list.scss';
// Styles

// Components
import ChatListItem from './item/ChatListItem.jsx';
// Components

export default class ChatList extends Component {
  render() {
    const {chats} = this.props;
    const chatListItems = _.values(chats).map((chat, i) => (<ChatListItem key={chat.userId} {...chat}/>));

    return(
      <div>
        {chatListItems}
      </div>
    );
  }
}