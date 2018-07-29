import React, { Component } from 'react';
import _ from 'lodash';

// Styles
import './message-list.scss';
// Styles

// Components
import MessageListItem from './item/MessageListItem.jsx';
// Components

export default class MessageList extends Component {
  render() {
    const {messages} = this.props;
    const messageListItems = _.values(messages).map((message, i) => (<MessageListItem key={message.number} {...message}/>));

    return(
      <div className={'message-list'}>
        {messageListItems}
      </div>
    );
  }
}