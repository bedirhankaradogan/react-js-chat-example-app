import React, {Component} from 'react';
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

    return _.values(chats).map((chat) => (<ChatListItem key={chat.userId} {...chat}/>));
  }
}